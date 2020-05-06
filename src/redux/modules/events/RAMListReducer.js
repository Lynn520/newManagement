import { createActions, createTypes } from '../../../utils/createRequestActions';
const initialState = {
    listData: null,
    totalData: null,
};

// action types
export const RAM_LIST = 'events/RAM_LIST';
export const requestFetchTypes = createTypes(RAM_LIST);
export const RAM_TOTAL = 'events/RAM_TOTAL';
export const requestTotalFetchTypes = createTypes(RAM_TOTAL);

// action creators
export function RAMListDispatch(params) {
    return {
        type: RAM_LIST,
        params,
    }
}
export function RAMTotalDispatch() {
    return {
        type: RAM_TOTAL,
    }
}
export const RAMListActions = createActions(requestFetchTypes);
export const RAMTotalActions = createActions(requestTotalFetchTypes);

export default function reducer(state = initialState, action) {

    switch (action.type) {
        case requestFetchTypes.REQUEST:
            return {
                ...state,
            };
        case requestFetchTypes.FAILURE:
            return {
                ...state,
            };
        case requestFetchTypes.SUCCESS:
            return Object.assign(
                {},
                state,
                { listData: action.response }
            )
        case requestTotalFetchTypes.REQUEST:
            return {
                ...state,
            };
        case requestTotalFetchTypes.FAILURE:
            return {
                ...state,
            };
        case requestTotalFetchTypes.SUCCESS:
            return Object.assign(
                {},
                state,
                { totalData: action.response }
            )
        default:
            return state
    }
}


