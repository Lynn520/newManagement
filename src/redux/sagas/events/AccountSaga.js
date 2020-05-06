import { put, call, takeLatest, takeEvery } from 'redux-saga/effects'
import { NEW_ACCOUNT_LIST, newAccountListActions } from '../../Actions/AccountAction';
import { api } from '../../../api/api'

function* AccountList(action) {

  try {
    yield put(newAccountListActions.request(action.params));
    const response = yield call(api.Account,action.params);
    const { data, success } = response.data;

    if (success === true) {
      yield put(newAccountListActions.success(data));
    } else{
      yield put(newAccountListActions.failure(data.errCode));
    }
  } catch (e) {
     console.log(e)
  }
};


//saga watchers
function* AccountFlow(action) {
  yield call(AccountList, action);
}

// saga watchers takeLatest
export default function* watchForHome() {
  yield takeEvery(NEW_ACCOUNT_LIST, AccountFlow);
}
