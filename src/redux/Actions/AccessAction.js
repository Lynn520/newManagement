
import { createActions, createTypes } from '../.././utils/createRequestActions';
export const NEW_ACCESS_LIST = 'events/NEW_ACCESS_LIST';
export const requestFetchTypes = createTypes(NEW_ACCESS_LIST);

// action creators
export function newAccessList(params) {
    return {
        type: NEW_ACCESS_LIST,
        params,
    }
}
export const newAccessListActions = createActions(requestFetchTypes);
