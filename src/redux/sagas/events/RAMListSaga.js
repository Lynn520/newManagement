import { put, call, takeEvery, takeLatest } from 'redux-saga/effects';
import { RAM_LIST, RAMListActions, RAM_TOTAL, RAMTotalActions } from '../../modules/events/RAMListReducer';
import { api } from '../../../api/api'

function* RAMList(action) {
    try {
        yield put(RAMListActions.request());
        const response = yield call(api.RAMList,action.params);
        const { data, success } = response.data
        if (success === true) {
            yield put(RAMListActions.success(data));
        }
        else {
            yield put(RAMListActions.failure('error'));
        }
    } catch (error) {
        console.log(error)
    }
};

function* RAMTotal() {
    try {
        yield put(RAMTotalActions.request());
        const response = yield call(api.RAMTotal);
        const { data, success } = response.data
        if (success === true) {
            yield put(RAMTotalActions.success(data));
        }
        else {
            yield put(RAMTotalActions.failure('error'));
        }
    } catch (error) {
        console.log(error)
    }
};


//saga watchers
function* RAMListFlow(action) {
    yield call(RAMList, action);
}

function* RAMTotalFlow(action) {
    yield call(RAMTotal, action);
}

// saga watchers takeLatest
export default function* watchForHome() {
    yield takeLatest(RAM_LIST, RAMListFlow);
    yield takeLatest(RAM_TOTAL, RAMTotalFlow);
}
