import { put, call, takeEvery } from 'redux-saga/effects';
import { FSC_ECHARTS, fscEchartsActions } from '../../modules/events/fscEchartsReducer';
import { api } from '../../../api/api'

function* fscEcharts(action) {
  try {
    yield put(fscEchartsActions.request());
    const response = yield call(api.fscEcharts,action.params);
    const { data, success } = response.data

    if (success === true) {
        yield put(fscEchartsActions.success(data));
    }
    else {
      yield put(fscEchartsActions.failure('error'));
    }
  } catch (error) {
    console.log(error)
  }
};


//saga watchers
function* fscEchartsFlow(action) {
  yield call(fscEcharts, action);
}

// saga watchers takeLatest
export default function* watchForTpsEcharts() {
  yield takeEvery(FSC_ECHARTS, fscEchartsFlow);
}
