import { createActions, createTypes } from '../../../utils/createRequestActions';
const initialState = {
  data: null,
};

// action types
export const FSC_ECHARTS = 'events/FSC_ECHARTS';
export const requestFetchTypes = createTypes(FSC_ECHARTS);

// action creators
export function fscEcharts(params) {
  return {
    type: FSC_ECHARTS,
    params,
  }
}
export const fscEchartsActions = createActions(requestFetchTypes);

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


