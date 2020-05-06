import { createActions, createTypes } from '../../../utils/createRequestActions';
const initialState = {
  data: null,
};

// action types
export const TPS_ECHARTS = 'events/TPS_ECHARTS';
export const requestFetchTypes = createTypes(TPS_ECHARTS);

// action creators
export function tpsEcharts(params) {
  return {
    type: TPS_ECHARTS,
    params,
  }
}
export const tpsEchartsActions = createActions(requestFetchTypes);

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
        { data: action.response }
      )
    default:
      return state
  }
}


