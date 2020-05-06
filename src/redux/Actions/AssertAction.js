
import { createActions, createTypes } from '../.././utils/createRequestActions';


/*账户资产*/
export const NEW_ASSET_LIST = 'events/NEW_ASSET_LIST';
export const requestFetchTypes = createTypes(NEW_ASSET_LIST);

export function newAssetList(params) {
    return {
        type: NEW_ASSET_LIST,
        params,
    }
}
export const newAssetListActions = createActions(requestFetchTypes);


