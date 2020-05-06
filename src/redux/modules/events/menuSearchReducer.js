import { createActions, createTypes } from '../../../utils/createRequestActions';
const initialState = {
  data: null,
};

// action types
export const MENU_SEARCH = 'events/MENU_SEARCH';
export const requestFetchTypes = createTypes(MENU_SEARCH);

// action creators
export function menuSearch(params) {
  return {
    type: MENU_SEARCH,
    params
  }
}
export const menuSearchActions = createActions(requestFetchTypes);

export default function reducer11(state = initialState, action) {
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
        { data: action.response }
      )
    default:
      return state
  }
}


