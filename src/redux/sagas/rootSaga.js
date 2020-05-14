import { all, fork } from 'redux-saga/effects';
import chainInfoSaga from './events/chainInfoSaga';
import RAMListSaga from './events/RAMListSaga';
import menuSearchSaga from './events/menuSearchSaga';
import newBlockDetailSaga from './events/newBlockDetailSaga';
import trxDetailSaga from './events/trxDetailSaga';
import homeWebSocketSaga from './events/homeSocketSaga'
import AccountSaga from './events/AccountSaga';
import TokenSaga from "./events/TokenSaga";
import TpsEchartsSaga from './events/TpsEchartsSaga';
import fscEchartsSaga from './events/fscEchartsSaga';
import publicKeySaga from './events/publicKeySaga';

import userListSaga from './events/userListSaga';

export default function* rootSaga() {
  yield all([
    fork(chainInfoSaga),
    fork(RAMListSaga),
    fork(menuSearchSaga),
    fork(newBlockDetailSaga),
    fork(trxDetailSaga),
    fork(AccountSaga),
    fork(TokenSaga),
    fork(TpsEchartsSaga),
    fork(fscEchartsSaga),
    fork(homeWebSocketSaga),
    fork(publicKeySaga),
    fork(userListSaga)
  ]);
}