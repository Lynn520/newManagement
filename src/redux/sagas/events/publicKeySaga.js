import { put, call, takeEvery } from 'redux-saga/effects';
import { PUBLICKEY, publicKeyActions } from '../../modules/events/publicKeyReducer'
import { api } from '../../../api/api'

function* publicKey(action) {
  try {
    yield put(publicKeyActions.request());
    const response = yield call(api.PublicKey,action.params);
    const { data, success } = response.data
    if (success === true) {
      yield put(publicKeyActions.success(data));
    }
    else {
      yield put(publicKeyActions.failure(data.errCode));
    }
  } catch (error) {
    console.log(error)
  }
};



function* publicKeyFlow(action) {
  yield call(publicKey, action);
}


// saga watchers takeLatest
export default function* watchForNewBlockDetail() {
  yield takeEvery(PUBLICKEY, publicKeyFlow);
 
}
