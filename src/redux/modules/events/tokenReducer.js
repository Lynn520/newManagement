import { createSelector } from 'reselect'
import idx from 'idx'
import map from 'lodash/map'
import filter from 'lodash/filter'
import orderBy from 'lodash/orderBy'
import split from 'lodash/split'
import toUpper from 'lodash/toUpper'
import toNumber from 'lodash/toNumber'
import reduce from 'lodash/reduce'
import { requestFetchTypes, requestMultipleExchangeFetchTypes } from '../../Actions/TokenAction'
import fixedLengthNumber from '../../../utils/fixedLengthNumber'

const initialState = {
    isFetching: false,
    error: null,
    data: null,
    isFetchingRate: false,
    errorRate: null,
    rateValue: null,
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case requestFetchTypes.REQUEST:
            return Object.assign({}, state, {
                isFetching: true,
                error: null,
                data: null,
            })
        case requestFetchTypes.FAILURE:
            return Object.assign({}, state, {
                isFetching: false,
                error: action.error,
                data: null,
            })
        case requestFetchTypes.SUCCESS:
            return Object.assign({}, state, {
                data: action.response,
            })
        case requestMultipleExchangeFetchTypes.REQUEST:
            return Object.assign({}, state, {
                isFetching: true,
                errorRate: null,
                rateValue: null,
            })
        case requestMultipleExchangeFetchTypes.FAILURE:
            return Object.assign({}, state, {
                isFetching: false,
                errorRate: action.error,
                rateValue: null,
            })
        case requestMultipleExchangeFetchTypes.SUCCESS:
            return Object.assign({}, state, {
                rateValue: action.response,
            })
        default:
            return state
    }
}

export const accountTokenError = state => state.tokenReducer.error

export const accountTokenData = state => state.tokenReducer.data

export const accountRateValue = state => state.tokenReducer.rateValue

export const accountSymbol = state => {
    const oldSymbolList = idx(accountTokenData(state), _ => _.symbol_list) || []
    let accountSymbolArr = [], accountSymbolStr ='';
    if(oldSymbolList.length>0){
        for (let i = 0; i<oldSymbolList.length; i++){
            accountSymbolArr.push(oldSymbolList[i].symbol)
        }
    }
    accountSymbolArr.length>0 && accountSymbolArr.indexOf('FSC')<=-1 ? accountSymbolArr.push('FSC') : accountSymbolArr
    accountSymbolStr = accountSymbolArr.toString()
    return accountSymbolStr;
}

export const accountTokenList = state => {
    const oldSymbolList = idx(accountTokenData(state), _ => _.symbol_list) || []
    const rateValueArr = accountRateValue(state) || []
    let symbolList=[];

    if((oldSymbolList.length>0)&&(rateValueArr.length>0)){
        for(let j=0; j<oldSymbolList.length; j++){
            if(rateValueArr.length>0){
                for (let i=0; i<rateValueArr.length; i++){
                    if(oldSymbolList[j].symbol===rateValueArr[i].base){
                        oldSymbolList[j].usdtValue = rateValueArr[i].rate
                    }
                }
            }
            symbolList.push(oldSymbolList[j])
        }
    }
    return symbolList
} 

export const accountValidTokenList = state => {
    return filter(accountTokenList(state), o => toNumber(o.available)).sort((item1,item2)=>{
        //总资产
        let usdValueItem1 = item1.available * item1.usdtValue;
        let usdValueItem2 = item2.available * item2.usdtValue;
        //资产相同时按字母排序
        
        if(usdValueItem1 === usdValueItem2){
            return item1.symbol < item2.symbol?-1:1
        }
        return usdValueItem2 - usdValueItem1
    })
}

const totalPrice = accountTokenList => {
    const sum = reduce(
        accountTokenList,
        (value, item) => {
            return value + item.available * item.usdtValue
        },
        0
    )

    return fixedLengthNumber({ number: sum })
}

export const accountTokenListTotalPrice = createSelector(
    accountTokenList,
    totalPrice
)
