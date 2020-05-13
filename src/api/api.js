
import {
    ARRANGE_LIST
} from './apiAdress'
import { restAPI_GET } from '../utils/networkingUtils'

const api = {
    // 值守列表
    arrange_list(params){
        const { pageNum, pageSize } = params
        return restAPI_GET({ url: ARRANGE_LIST + `?page=${pageNum}&size=${pageSize}` })
    }

    // //内存列表
    // RAMList(params) {
    //     const { pageNum, pageSize, soreFieldStr, asc } = params
    //     return restAPI_GET({ url: RAM_LIST + `?page=${pageNum}&size=${pageSize}&sortField=${soreFieldStr}&asc=${asc}` })
    // },

    // //内存总数
    // RAMTotal() {
    //     return restAPI_GET({ url: RAM_TOTAL })
    // },

    // //首页搜索
    // menuSearch: (params) => {
    //     return restAPI_GET({ url: MENU_SEARCH + `?param=${params}` })
    // },

    // //区块详情总览
    // newBlockDetail: (params) => {
    //     return restAPI_GET({ url: NEW_BLOCK_DETAIL + `/${params}/detail` })
    // },
    // //区块详情action数据
    // newBlockDetailActionsApi: (params) => {
    //     return restAPI_GET({ url: NEW_BLOCK_DETAIL + `/${params}/transactions` })
    // },
    // //区块详情raw数据
    // newBlockDetailRaw: (params) => {
    //     return restAPI_GET({ url: NEW_BLOCK_DETAIL + `/${params}/raw` })
    // },

    // //交易详情主信息
    // trxDetail: (params) => {
    //     return restAPI_GET({ url: TRX_DETAIL + `/${params}/detail` })
    // },
    // //交易详情raw数据
    // trxDetailRaw: (params) => {
    //     return restAPI_GET({ url: TRX_DETAIL_RAW + `/${params}/raw` })
    // },
    // //交易详情action数据
    // trxDetailActions: (params) => {
    //     return restAPI_GET({ url: TRX_DETAIL_ACTIONS + `/${params}/actions` })
    // },
    // // 账户基础信息
    // Account(params) {
    //     const { account } = params
    //     return restAPI_GET({
    //         url: NEW_ACCESS_LIST, params: {
    //             account
    //         }
    //     });
    // },
    // //账户代币
    // Token(params) {
    //     const { account, code } = params
    //     return restAPI_GET({ url: NEW_TOKEN + `?account=${account}` });
    // },
    // //根据publicKey获取公钥信息
    // PublicKey(params) {
    //     const { key } = params
    //     return restAPI_GET({ url: PUBLICK_KEY + key });
    // },
    // // 首页TPS-Echarts图
    // tpsEcharts: () => {
    //     return restAPI_GET({ url: TPS_ECHARTS })
    // },
    // // 首页FSC-Echarts图
    // fscEcharts: () => {
    //     return restAPI_GET({ url: FSC_ECHARTS, base: 'FSDEX' })
    // },
    // //账户页面汇率新接口
    // fscMultipleExchangeRate: (value) => {
    //     const { params } = value
    //     return restAPI_GET({ url: MULTIPLE_EXCHANGE + `?base=${params.base}&quote=${params.quote}`, base: 'FSDEX' })
    // },
};


export {
    api,
}
