import { createActions, createTypes } from '../../../utils/createRequestActions';
import idx from 'idx'
import isEmpty from 'lodash/isEmpty'
const initialState = {
  data: null,
  error:null
};

// action types
export const PUBLICKEY = 'events/PUBLICKEY';
export const requestFetchTypes = createTypes(PUBLICKEY);


// action creators
export function getPublicKey(params) {
  return {
    type: PUBLICKEY,
    params,
  }
}
export const publicKeyActions = createActions(requestFetchTypes);

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
        error: action.error,
        data:false
      };
    case requestFetchTypes.SUCCESS:
      if(!isEmpty(action.response)){
        return {
          ...state,
          ...{ data: action.response }
        }
      }else{
        return {
          ...state,
          error: 'emptyResult',
          data:false
        };
      }
    default:
      return state
  }
}


