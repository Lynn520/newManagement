
import { createActions, createTypes } from '../.././utils/createRequestActions';

// action types
export const NEW_ACCOUNT_LIST = 'events/NEW_ACCOUNT_LIST';
export const requestFetchTypes = createTypes(NEW_ACCOUNT_LIST);

export const newAccountList = (params) => {
    return {
        type: NEW_ACCOUNT_LIST,
        params,
    }
};

export const newAccountListActions = createActions(requestFetchTypes);





