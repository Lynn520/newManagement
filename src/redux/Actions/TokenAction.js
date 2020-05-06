
import { createActions, createTypes } from '../.././utils/createRequestActions';
export const NEW_TOKEN_LIST= 'events/NEW_TOKEN_LIST';
export const requestFetchTypes = createTypes(NEW_TOKEN_LIST);
export const MULTIPLE_EXCHANGE_RATE= 'events/MULTIPLE_EXCHANGE_RATE';
export const requestMultipleExchangeFetchTypes = createTypes(MULTIPLE_EXCHANGE_RATE);

// action creators
export function newTokenList(params) {
    return {
        type: NEW_TOKEN_LIST,
        params,
    }
}
export const newTokenListActions = createActions(requestFetchTypes);

export function multipleExchange(params) {
    return {
        type: MULTIPLE_EXCHANGE_RATE,
        params,
    }
}
export const multipleExchangeActions = createActions(requestMultipleExchangeFetchTypes);
