import { combineReducers } from 'redux';
import chainInfoReducer from './chainInfoReducer'
import home from './home'
import RAMListReducer from './RAMListReducer'
import menuSearchReducer from './menuSearchReducer'
import newBlockDetailReducer from './newBlockDetailReducer'
import trxDetailReducer from './trxDetailReducer'
import homeWebSocketReducer from './homeWebsocketReducer'
import accountReducer from './accountReducer'
import tokenReducer from './tokenReducer'
import tpsEchartsReducer from './tpsEchartsReducer'
import fscEchartsReducer from './fscEchartsReducer'
import publicKeyReducer from './publicKeyReducer'
const events = combineReducers({
    chainInfoReducer,
    home,
    RAMListReducer,
    menuSearchReducer,
    newBlockDetailReducer,
    trxDetailReducer,
    accountReducer,
    tokenReducer,
    tpsEchartsReducer,
    fscEchartsReducer,
    homeWebSocketReducer,
    publicKeyReducer,
})

export default events;
