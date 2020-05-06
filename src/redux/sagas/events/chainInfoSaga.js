import { put, call, takeLatest } from 'redux-saga/effects';
import { chainInfoActions,CHAIN_INFO} from '../../modules/events/chainInfoReducer';
import { api } from '../../../api/api';

//saga workders
function* chainInfo(action) {
    try {
        yield put(chainInfoActions.request());
        const response = yield call(api.chainInfo,true);
        const { data, status } = response
        if (status == 200) {
            yield put(chainInfoActions.success(data));
        }
        else {
            yield put(chainInfoActions.failure('error'));
        }
    } catch (error) {
        console.log(error)
    }
}

//saga watchers
function* chainInfoFlow(action) {
    yield call(chainInfo, action);
}

// saga watchers takeLatest
export default function* watchForChainInfo() {
    yield takeLatest(CHAIN_INFO, chainInfoFlow);
}
