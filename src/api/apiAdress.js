import { target } from '../../package.json'

//dev

// const WBSOCKET_DEV = 'wss://dev-wss-blockbrowser.valicn.com'
const DEV = 'http://192.168.1.112:9081'
// const RPC_DEV = 'https://dev-api-chain.valicn.com'
// const FSDEX_DEV = 'https://dev-api-fsdex.valicn.com'
// const DEV = ''

// //beta
// const WBSOCKET_BETA = 'wss://beta-wss-blockbrowser.valicn.com'
// const BETA = 'https://beta-api-blockbrowser.valicn.com'
// const RPC_BETA = 'https://beta-api-chain.valicn.com'
// const FSDEX_BETA = 'https://beta-api-fsdex.valicn.com'

// //dawn
// const WBSOCKET_DAWN = 'wss://wss.api.fshares.io'
// const DAWN = 'https://browser.api.fshares.io'
// const RPC_DAWN = 'https://hka.chain.api.fshares.io'
// const FSDEX_DAWN = 'https://dex.api.fshares.io'

// //release
// const WBSOCKET_RELEASE = 'wss://wss.api.fshares.com'
// const RELEASE = 'https://browser.api.fshares.com'
// const RPC_RELEASE = 'https://hka.chain.api.fshares.com'
// const FSDEX_RELEASE = 'https://dex.api.fshares.com'

//chainBrowerSSET
let WEBSOCKET
let RPC
let HTTP_BASE
let HTTP_BASE_FSDEX

switch (target) {
    case 'dev':
        WEBSOCKET = WBSOCKET_DEV
        HTTP_BASE = DEV
        RPC = RPC_DEV
        HTTP_BASE_FSDEX = FSDEX_DEV
        break
    // case 'beta':
    //     WEBSOCKET = WBSOCKET_BETA
    //     HTTP_BASE = BETA
    //     RPC = RPC_BETA
    //     HTTP_BASE_FSDEX = FSDEX_BETA
    //     break
    // case 'release':
    //     WEBSOCKET = WBSOCKET_RELEASE
    //     HTTP_BASE = RELEASE
    //     RPC = RPC_RELEASE
    //     HTTP_BASE_FSDEX = FSDEX_RELEASE
    //     break
    // case 'dawn':
    //     WEBSOCKET = WBSOCKET_DAWN
    //     HTTP_BASE = DAWN
    //     RPC = RPC_DAWN
    //     HTTP_BASE_FSDEX = FSDEX_DAWN
    //     break
}

// const HOME_CHAIN_DETAIL = WEBSOCKET + '/v1/ws/chainDetail'
// const RAM_LIST = '/api/v1/memory/list'
// const RAM_TOTAL = '/api/v1/memory/total'
// const MENU_SEARCH = '/api/v1/search'
// const NEW_BLOCK_DETAIL = '/api/v1/block'
// const CHAIN_INFO = '/api/v1/chain/info'
// const TRX_DETAIL = '/api/v1/transaction'
// const TRX_DETAIL_RAW = '/api/v1/transaction'
// const TRX_DETAIL_ACTIONS = '/api/v1/transaction'
// const NEW_TOKEN = '/api/v1/account/token'
// const NEW_ACCESS_LIST = '/api/v1/account/overview'
// const TPS_ECHARTS = '/api/v1/statistics/tps'
// const FSC_ECHARTS = '/v1/market/kline/fsc?period=1h&size=24'
// const MULTIPLE_EXCHANGE = '/v1/rate/get_coin_exchange_rate'
// // const SE
// const PUBLICK_KEY = '/api/v1/account/key/'

const ARRANGE_LIST = '/back-sysmanage/bAlarmInfoController/listByPage'
export {
    // HTTP_BASE,
    // HTTP_BASE_FSDEX,
    // HOME_CHAIN_DETAIL,
    // RAM_LIST,
    // RAM_TOTAL,
    // MENU_SEARCH,
    // NEW_BLOCK_DETAIL,
    // CHAIN_INFO,
    // TRX_DETAIL,
    // TRX_DETAIL_RAW,
    // TRX_DETAIL_ACTIONS,
    // NEW_TOKEN,
    // NEW_ACCESS_LIST,
    // TPS_ECHARTS,
    // FSC_ECHARTS,
    // MULTIPLE_EXCHANGE,
    // PUBLICK_KEY,
    ARRANGE_LIST
}
