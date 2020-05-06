
import { createActions, createTypes } from '../.././utils/createRequestActions';

export const NEW_RESOURCE_LIST = 'events/NEW_RESOURCE_LIST';
export const requestFetchTypes = createTypes(NEW_RESOURCE_LIST);

export function newResourceList(params) {
  return {
    type: NEW_RESOURCE_LIST,
    params,
  }
}
export const newResourceListActions = createActions(requestFetchTypes);
