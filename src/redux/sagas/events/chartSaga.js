import { takeEvery } from 'redux-saga/effects';
import { saveMap } from '../../Actions/MapActions';
import { saveLoan } from '../../Actions/LoanActions';



export default function* rootSaga() {
  // yield takeLatest('setSocket', setSocket);
  yield takeEvery('saveMap', saveMap);
  yield takeEvery('saveLoan', saveLoan);
}
