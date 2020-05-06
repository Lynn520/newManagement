import { HOME_WS_TYPES as types} from '../../Actions/HomeWebSocketActions'

const initwsState ={
    status:'未连接',
    isSuccess:false,
    ws:null,
    msg:{}
}
export default function webSockerfun(state=initwsState,action) {
    switch (action.type){
        case types.CONNECTSUCCESS:
            return{
                ...state,
                status:"连接成功",
            }
            break;
        case types.CONNECTFALL:
            return{
                ...state,
                status:"未连接",
                msg:{}
            }
            break;
        case types.RECEIVEMSG:
            return{
                ...state,
                msg:{ ...state.msg, ...action.msgobj}
            }
            break;
        default:
            return state;
    }
}