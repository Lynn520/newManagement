import { createActions, createTypes } from '../../../utils/createRequestActions';
const initialState={
    data: null,
};

// action types
export const HOME_DATA_SOCKET = 'events/HOME_DATA_SOCKET';
export const requestFetchTypes = createTypes(HOME_DATA_SOCKET);


// action creators
export const homeDataSocketActions = createActions(requestFetchTypes);


export default function reducer(state = initialState, action){
    switch(action.type){
      
        case requestFetchTypes.REQUEST:
        
      return {
        ...state,
        
      };
    case requestFetchTypes.FAILURE:
      return {
        ...state,
      };
    case requestFetchTypes.SUCCESS:
      return {
        ...state,
        data:  action.response
      };
    default:
        return state;  
    }
    
}

export function homeDataSocket(){
    return{
        type: HOME_DATA_SOCKET,
    }
}
// selectors
const getEvents = state =>
  state

const getIsFetching = state => state

export const selectors = {
  getEvents,
  getIsFetching,
};

