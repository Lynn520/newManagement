import { createActions, createTypes } from '../../../utils/createRequestActions';
const initialState = {
  data: null,
  rawData: null,
  actionsData: null,
};

// action types
export const TRX_DETAIL = 'events/TRX_DETAIL';
export const requestFetchTypes = createTypes(TRX_DETAIL);
export const TRX_DETAIL_RAW = 'events/TRX_DETAIL_RAW';
export const rawRequestFetchTypes = createTypes(TRX_DETAIL_RAW);
export const TRX_DETAIL_ACTIONS = 'events/TRX_DETAIL_ACTIONS';
export const actionRequestFetchTypes = createTypes(TRX_DETAIL_ACTIONS);

// action creators
export function trxDetail(params) {
  return {
    type: TRX_DETAIL,
    params,
  }
}
export function trxDetailRaw(params) {
  
  return {
    type: TRX_DETAIL_RAW,
    params,
  }
}
export function trxDetailAction(params) {
  return {
    type: TRX_DETAIL_ACTIONS,
    params,
  }
}
export const trxDetailActions = createActions(requestFetchTypes);
export const trxDetailRawActions = createActions(rawRequestFetchTypes);
export const trxDetailActionActions = createActions(actionRequestFetchTypes);

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case requestFetchTypes.REQUEST:
      return {
        ...state,
        data:null
      };
    case requestFetchTypes.FAILURE:
      return {
        ...state,
        data:false
      };
    case requestFetchTypes.SUCCESS:
      return Object.assign(
        {},
        state,
        { data: action.response }
      )
      case rawRequestFetchTypes.REQUEST:
      return {
        ...state,
        rawData:null
      };
    case rawRequestFetchTypes.FAILURE:
      return {
        ...state, rawData:false
      };
    case rawRequestFetchTypes.SUCCESS:
      return Object.assign(
        {},
        state,
        { rawData: action.response }
      )
      case actionRequestFetchTypes.REQUEST:
      return {
        ...state,
        actionsData:null
      };
    case actionRequestFetchTypes.FAILURE:
      return {
        ...state,actionsData:false
      };
    case actionRequestFetchTypes.SUCCESS:
      return Object.assign(
        {},
        state,
        { actionsData: action.response }
      )
    default:
      return state
  }
}


