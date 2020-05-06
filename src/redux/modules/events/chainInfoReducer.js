import { createActions, createTypes } from '../../../utils/createRequestActions';
const initialState={
    data: null,
};

// action types
export const CHAIN_INFO = 'events/CHAIN_INFO';
export const requestFetchTypes = createTypes(CHAIN_INFO);

// action creators
export const chainInfoActions = createActions(requestFetchTypes);

export function chainInfo(){
    return{
        type: CHAIN_INFO,
    }
}

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
            return {
                ...state,
                data: action.response
            };
        default:
            return state;
    }
}



