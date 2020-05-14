import { target } from '../../package.json'

//dev
const DEV = 'http://192.168.1.101:7006'

// //beta

// //dawn

// //release


//chainBrowerSSET
let HTTP_BASE

switch (target) {
    case 'dev':
        HTTP_BASE = DEV
        break
    // case 'beta':
    //     HTTP_BASE = BETA
    //     break
    // case 'release':
    //     HTTP_BASE = RELEASE
    //     break
    // case 'dawn':
    //     HTTP_BASE = DAWN
    //     break
}

// // const SE
const USER_LIST = '/back-sysmanage//sysUserInfoController/listByPage'

const ARRANGE_LIST = '/back-sysmanage/bAlarmInfoController/listByPage'
export {
    HTTP_BASE,
    USER_LIST,
    ARRANGE_LIST,
}
