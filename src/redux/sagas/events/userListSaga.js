import { put, call, takeEvery } from 'redux-saga/effects';
import { USER_LIST, userListActions } from '../../modules/events/userListReducer';
import { api } from '../../../api/api'

function* userList(action) {
  try {
      console.log('action===>',action)
    yield put(userListActions.request());
    const response = yield call(api.user_list,action.params);
    const { data, success } = response.data

    if (success === true) {
        yield put(userListActions.success(data));
    }
    else {
      yield put(userListActions.failure('error'));
    }
  } catch (error) {
    console.log(error)
  }
};


//saga watchers
function* userListFlow(action) {
  yield call(userList, action);
}

// saga watchers takeLatest
export default function* watchForUserList() {
  yield takeEvery(USER_LIST, userListFlow);
}
