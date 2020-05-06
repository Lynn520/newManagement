import { HOME_CHAIN_DETAIL } from '../../../api/apiAdress';
import { take, fork ,cancel ,cancelled, takeLatest} from 'redux-saga/effects'
import actionCreators,{ HOME_WS_TYPES as types } from '../../Actions/HomeWebSocketActions'
import pako from 'pako'
import { showLoading, hideLoading } from "../../../utils/Tool"
let { connectsuccess, connectfail, wsmsgres, sendmsg, wsconnect, wsconnectclose } = actionCreators;
let { CONNECT, SENDMSG, CONNECTCLOSE } = types;
let ws = null; // 缓存 websocket连接
let _mydispatch = null; // 因为ws事件回调中无法使用put触发action 所以需要connectAction的参数中传入dispatch
//发送消息action监听
let loading = {
    overview:false,
    newTrx:false,
    newBlocks:false
}
//socket数据分开推送 频率过快  这里做处理
let waitMessageTimeout = true,allMessage = {},waitCount = 0;
function* sendmsgWatcher(){
    try{
        while (true){
            const sendaction = yield take(SENDMSG);
            ws.send(sendaction.sendmsg);
            console.log("发送了ping")
        }
    }finally {
        if(yield cancelled()){
            console.log("取消了监听发送任务");
        }
    }
}
//关闭socket任务
function* connectcolseWebsocket() {
    ws.close();
}
//解压数据
function ugzip(blob){
    return new Promise((resolve,reject)=>{
        let fileReader = new FileReader;
        if(blob.size === 0){
            reject({})
        }else{
            fileReader.onload = (e) => {
                let result = {};
                result = JSON.parse(pako.inflate(fileReader.result,{to:'string'}) ); 
                resolve(result)
            }
            fileReader.readAsArrayBuffer(blob)
        }
    })
}
//新建socket连接
function* connectWebsocket(mydispatch) {
    if(ws){ ws.close() }
    ws = new WebSocket(HOME_CHAIN_DETAIL);
    let intervalPing = null;
    ws.onopen = () => {
        mydispatch(connectsuccess())
        intervalPing = setInterval(()=>{
            ws.send(JSON.stringify({ping:(new Date).getTime()}))
        },5000)
    };
    ws.onerror = e => {
        console.log(e)
        mydispatch(connectfail());
        //检测到连接错误时重连
        if(intervalPing){
            clearInterval(intervalPing)
        }
        setTimeout(()=>{
            mydispatch(wsconnect({ mydispatch }))
        },4000)
    };
    ws.onmessage = async e => {
        
        let message = {};
        try{
            await ugzip(e.data).then((result)=>{
                message = result;
            })
            //1s内有数据推送就不触发更新视图 只缓存数据 
            allMessage = {...allMessage,...message}
            const updataTimeout = setTimeout(()=>{
                if(waitMessageTimeout !== updataTimeout&&waitCount < 10){
                    waitCount++;
                    return false
                }else{
                    waitCount = 0;
                    mydispatch(wsmsgres(allMessage))
                }
            },100)
            waitMessageTimeout = updataTimeout
            
            // mydispatch(wsmsgres(message))
            
        }catch(e){
            console.log("ws数据异常")
        }   
    };
    ws.onclose = e => {
        // connection closed
        mydispatch(wsconnectclose())
        if(intervalPing){
            clearInterval(intervalPing)
        }
        console.log(e.code);
        setTimeout(()=>{
            mydispatch(wsconnect({ mydispatch }))
        },4000)
        
    };
}
function* websocketWorker(action){
    if(_mydispatch == null){
        _mydispatch = action.connectobj.mydispatch;
    }
    //新建socket连接
    // showLoading();
    yield fork(connectWebsocket,_mydispatch);
    //启动发送事件action监听
    let sendmsgTask = yield fork(sendmsgWatcher);
    //监听主动断开action
    yield take(CONNECTCLOSE);
    //断开ws连接
    yield fork(connectcolseWebsocket);
    //取消发送事件监听
    yield cancel(sendmsgTask);
}
export default function* watchWebsocket() { 
    //监听新建连接事件action       
    yield takeLatest(CONNECT,websocketWorker);
}
