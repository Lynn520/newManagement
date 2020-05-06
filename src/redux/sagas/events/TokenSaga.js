import { put, call, takeLatest, takeEvery } from 'redux-saga/effects';
import { NEW_TOKEN_LIST, newTokenListActions, MULTIPLE_EXCHANGE_RATE, multipleExchangeActions } from '../../Actions/TokenAction';
import { api } from '../../../api/api'


function* tokenList(action) {
  try {
    yield put(newTokenListActions.request());
    const response = yield call(api.Token,action.params);
    const { data, success } = response.data;

    if (success === true) {
      yield put(newTokenListActions.success(data));
    }
  } catch (e) {
    yield put(newTokenListActions.failure(e));
  }
};

function* MultipleExchange(action){
    try {
        yield put(multipleExchangeActions.request());
        const response = yield call(api.fscMultipleExchangeRate,action.params);
        const { data, success } = response.data;
        if (success === true) {
          yield put(multipleExchangeActions.success(data));
        }
      } catch (e) {
        yield put(multipleExchangeActions.failure(e));
      }
}

//saga watchers
function* TokenFlow(action) {
  yield call(tokenList, action);
}
function* MultipleFlow(action){
    yield call(MultipleExchange, action);
}

// saga watchers takeLatest
export default function* watchForHome() {
  yield takeEvery(NEW_TOKEN_LIST, TokenFlow);
  yield takeEvery(MULTIPLE_EXCHANGE_RATE, MultipleFlow);
}

