import { put, call, takeLatest, takeEvery } from 'redux-saga/effects';
import { MENU_SEARCH, menuSearchActions } from '../../modules/events/menuSearchReducer';
import { api } from '../../../api/api'

function* home(action) {
  try {
    yield put(menuSearchActions.request());
    const response = yield call(api.menuSearch,action.params);
    const { data, success } = response.data
    if (success === true) {
        // console.log('menuSearchActions',menuSearchActions.success(data))
      yield put(menuSearchActions.success(data));
    }
    else {
      yield put(menuSearchActions.failure('error'));
    }
  } catch (error) {
    console.log(error)
  }
};


//saga watchers
function* homeFlow(action) {
  yield call(home, action);
}

// saga watchers takeLatest
export default function* watchForHome() {
  yield takeEvery(MENU_SEARCH, homeFlow);
}
