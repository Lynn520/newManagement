import { put, call, takeLatest, takeEvery } from 'redux-saga/effects';
import { NEW_BLOCK_DETAIL,NEW_BLOCK_DETAIL_RAW, NEW_BLOCK_DETAIL_ACTION, newBlockDetailActions, newBlockDetailRawActions, newBlockDetailActionActions } from '../../modules/events/newBlockDetailReducer';
import { api } from '../../../api/api'

function* newBlockDetail(action) {
  try {
    yield put(newBlockDetailActions.request());
    const response = yield call(api.newBlockDetail,action.params);
    if(!response.data){
      yield put(newBlockDetailActions.failure(30001));
      return
    }
    const { data, success } = response.data
    if (success === true) {
      yield put(newBlockDetailActions.success(data));
    }
    else {
      yield put(newBlockDetailActions.failure(data.errCode));
    }
  } catch (error) {
    console.log(error)
  }
};


function* newBlockDetailRaw(action) {
  try {
    yield put(newBlockDetailRawActions.request());
    const response = yield call(api.newBlockDetailRaw,action.params);
    const { data, success } = response.data
    if (success === true) {
      yield put(newBlockDetailRawActions.success(data));
    }
    else {
      yield put(newBlockDetailRawActions.failure(data.errCode));
    }
  } catch (error) {
    console.log(error)
  }
};
function* newBlockDetailAction(action) {
  try {
    yield put(newBlockDetailActionActions.request());
    const response = yield call(api.newBlockDetailActionsApi,action.params);
    const { data, success } = response.data
    if (success === true) {
      yield put(newBlockDetailActionActions.success(data));
    }
    else {
      yield put(newBlockDetailActionActions.failure(data.errCode));
    }
  } catch (error) {
    console.log(error)
  }
};


//saga watchers
function* newBlockDetailFlow(action) {
  yield call(newBlockDetail, action);
}
function* newBlockDetailRawFlow(action) {
  yield call(newBlockDetailRaw, action);
}
function* newBlockDetailActionFlow(action) {
  yield call(newBlockDetailAction, action);
}

// saga watchers takeLatest
export default function* watchForNewBlockDetail() {
  yield takeEvery(NEW_BLOCK_DETAIL, newBlockDetailFlow);
  yield takeEvery(NEW_BLOCK_DETAIL_RAW, newBlockDetailRawFlow);
  yield takeEvery(NEW_BLOCK_DETAIL_ACTION, newBlockDetailActionFlow);
}
