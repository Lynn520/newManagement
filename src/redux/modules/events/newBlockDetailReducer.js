import { createActions, createTypes } from '../../../utils/createRequestActions';
import idx from 'idx';
import { getTruthTime } from '../../../utils/getTruthTime'
const initialState = {
  data: null,
  error:null,
  rawData: null,
  actionData: null,
};

// action types
export const NEW_BLOCK_DETAIL = 'events/NEW_BLOCK_DETAIL';
export const requestFetchTypes = createTypes(NEW_BLOCK_DETAIL);
export const NEW_BLOCK_DETAIL_RAW = 'events/NEW_BLOCK_DETAIL_RAW';
export const rawRequestFetchTypes = createTypes(NEW_BLOCK_DETAIL_RAW);
export const NEW_BLOCK_DETAIL_ACTION = 'events/NEW_BLOCK_DETAIL_ACTION';
export const actionRequestFetchTypes = createTypes(NEW_BLOCK_DETAIL_ACTION);

// action creators
export function newBlockDetail(params) {
  return {
    type: NEW_BLOCK_DETAIL,
    params,
  }
}

export function newBlockDetailRaw(params) {
  
  return {
    type: NEW_BLOCK_DETAIL_RAW,
    params,
  }
}
export function newBlockDetailAction(params) {
  
  return {
    type: NEW_BLOCK_DETAIL_ACTION,
    params,
  }
}
export const newBlockDetailActions = createActions(requestFetchTypes);
export const newBlockDetailRawActions = createActions(rawRequestFetchTypes);
export const newBlockDetailActionActions = createActions(actionRequestFetchTypes);

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case requestFetchTypes.REQUEST:
      return {
        ...state,
        data:null,
        error:null
      };
    case requestFetchTypes.FAILURE:
      return {
        ...state,
        error: action.error,
        data:false
      };
    case requestFetchTypes.SUCCESS:
      return Object.assign(
        {},
        state,
        { data: action.response, error: null },
      )
      case rawRequestFetchTypes.REQUEST:
        return {
          ...state,
          rawData:null,
          error:null
        };
      case rawRequestFetchTypes.FAILURE:
        return {
          ...state,
          error: action.error,
          rawData:false
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
            actionData:null,
            error:null
          };
        case actionRequestFetchTypes.FAILURE:
          return {
            ...state,
            error: action.error,
            actionData:false
          };
        case actionRequestFetchTypes.SUCCESS:
          return Object.assign(
            {},
            state,
            { actionData: action.response }
          )
    default:
      return state
  }
}
export const getChainInfo = state => state.chainInfoReducer.data
export const getBlockDetail = state => state.newBlockDetailReducer.data
export const getBlockStatus = state => {
  const chainInfoData = getChainInfo(state)
  const blockDetailData = getBlockDetail(state)
  const headBlockNum = idx(chainInfoData,_=>_.headBlockNum);
  const lastIrreversibleBlockNum = idx(chainInfoData,_=>_.lastIrreversibleBlockNum);
  const currentBlockNum = parseInt(idx(blockDetailData,_=>_.blockNum));
  if((!headBlockNum)||(!lastIrreversibleBlockNum)||(!currentBlockNum)){
    return 'unknown'
  }
  if(currentBlockNum===headBlockNum){
    return 'lastest'
  }
  if(currentBlockNum < headBlockNum ){
    if(currentBlockNum > lastIrreversibleBlockNum){
      return 'waitconfirm'
    }else{
      return 'excuted'
    }
  }else{
    console.log('状态错误')
  }
}
export const getBlockCardData = (state) => {
  const newBlockDetailData = state.newBlockDetailReducer.data
  if(newBlockDetailData){
    return {                                                         
      blockNum: newBlockDetailData.blockNum,
      blockTime: getTruthTime(newBlockDetailData.blockTime),
      blockHash: newBlockDetailData.blockHash,
      producer: newBlockDetailData.producer,
      prevBlock: newBlockDetailData.previous,
      nextBlock: (parseInt(newBlockDetailData.blockNum) + 1).toString(),
    }
  }else{
    return {
      blockNum: '- - -',
      blockTime: '- - -',
      blockHash: '- - -',
      producer: '- - -',
      prevBlock: '- - -',
      nextBlock: '- - -',
    }
  }
  
}


