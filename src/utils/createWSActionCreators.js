const CONNECTSUCCESS = 'CONNECTSUCCESS';
const CONNECT = 'CONNECT';
const CONNECTFAIL = 'CONNECTFAIL';
const SENDMSG = 'SENDMSG';
const CONNECTCLOSE = 'CONNECTCLOSE';
const RECEIVEMSG = 'RECEIVEMSG';
export const createWSTypes = (currentWSType) => {
    return [CONNECT,CONNECTSUCCESS,CONNECTFAIL,SENDMSG,CONNECTCLOSE,RECEIVEMSG].reduce((preObj,commonType)=>{
        preObj[commonType] = currentWSType +　commonType
        return preObj;
    },{})
}
export const createWSActionCreators = (types) => {
    let wsconnect =  (connectobj)  => ({ type : types.CONNECT,connectobj:connectobj}), //因为put不能在message回调中执行这里需要container组件回传dispatch
    wsconnectclose =  ()  => ({ type : types.CONNECTCLOSE}),
    connectsuccess =  ()  => ({ type : types.CONNECTSUCCESS}),
    connectfail =  ()  => ({ type : types.CONNECTFAIL}),
    sendmsg =  (sendmsg)  => ({ type : types.SENDMSG,sendmsg:sendmsg}),
    wsmsgres =  (msgobj)  => ({ type : types.RECEIVEMSG,msgobj:msgobj});
    return {
        connectsuccess,
        connectfail,
        wsconnect,
        wsconnectclose,
        sendmsg,
        wsmsgres
    }
}