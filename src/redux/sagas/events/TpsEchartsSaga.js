import { put, call, takeLatest, takeEvery } from 'redux-saga/effects';
import { TPS_ECHARTS, tpsEchartsActions } from '../../modules/events/tpsEchartsReducer';
import { api } from '../../../api/api'

function* tpsEcharts(action) {
  try {
    yield put(tpsEchartsActions.request());
    const response = yield call(api.tpsEcharts,action.params);
    const { data, success } = response.data
    if (success === true) {
      yield put(tpsEchartsActions.success(data));
    }
    else {
      yield put(tpsEchartsActions.failure('error'));
    }
  } catch (error) {
    console.log(error)
  }
};


//saga watchers
function* tpsEchartsFlow(action) {
  yield call(tpsEcharts, action);
}

// saga watchers takeLatest
export default function* watchForTpsEcharts() {
  yield takeEvery(TPS_ECHARTS, tpsEchartsFlow);
}
