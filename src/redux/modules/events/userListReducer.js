import { createActions, createTypes } from '../../../utils/createRequestActions';
const initialState = {
    listData: null,
    totalData: null,
};

// action types
export const USER_LIST = 'events/USER_LIST';
export const userListFetchTypes = createTypes(USER_LIST);

// action creators
export function userListDispatch(params) {
    
    return {
        type: USER_LIST,
        params,
    }
}

export const userListActions = createActions(userListFetchTypes);

export default function reducer(state = initialState, action) {

    switch (action.type) {
        case userListFetchTypes.REQUEST:
            return {
                ...state,
            };
        case userListFetchTypes.FAILURE:
            return {
                ...state,
            };
        case userListFetchTypes.SUCCESS:
            return Object.assign(
                {},
                state,
                { listData: action.response }
            )
       
        default:
            return state
    }
}


