import { put, call, takeLatest, takeEvery } from 'redux-saga/effects';
import { TRX_DETAIL,TRX_DETAIL_RAW, TRX_DETAIL_ACTIONS, trxDetailActions,trxDetailRawActions,trxDetailActionActions } from '../../modules/events/trxDetailReducer';
import { api } from '../../../api/api'

function* trx(action) {
  try {
    yield put(trxDetailActions.request());
    const response = yield call(api.trxDetail,action.params);

    const { data, success } = response.data
    if (success === true) {
      yield put(trxDetailActions.success(data));
    }
    else {
      yield put(trxDetailActions.failure('error'));
    }
  } catch (error) {
    console.log(error)
  }
};

function* trxDetailRaw(action){
  try {
    yield put(trxDetailRawActions.request());
    const response = yield call(api.trxDetailRaw,action.params);
    const { data, success } = response.data
    if (success === true) {
      yield put(trxDetailRawActions.success(data));
    }
    else {
      yield put(trxDetailRawActions.failure('error'));
    }
  } catch (error) {
    console.log(error)
  }
}

function* trxDetailAction(action){
  try {
    yield put(trxDetailActionActions.request());
    const response = yield call(api.trxDetailActions,action.params);
    const { data, success } = response.data
    if (success === true) {
      yield put(trxDetailActionActions.success(data));
    }
    else {
      yield put(trxDetailActionActions.failure('error'));
    }
  } catch (error) {
    console.log(error)
  }
}


//saga watchers
function* trxFlow(action) {
  yield call(trx, action);
}
function* trxDetailRawFlow(action){
  yield call (trxDetailRaw, action)
}
function* trxDetailActionFlow(action){
  yield call (trxDetailAction, action)
}

// saga watchers takeLatest
export default function* watchForTrxAll() {
  yield takeEvery(TRX_DETAIL, trxFlow);
  yield takeEvery(TRX_DETAIL_RAW, trxDetailRawFlow);
  yield takeEvery(TRX_DETAIL_ACTIONS, trxDetailActionFlow);
}
