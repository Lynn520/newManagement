
import {
    ARRANGE_LIST,
    USER_LIST,
} from './apiAdress'
import { restAPI_GET, restAPI_POST, } from '../utils/networkingUtils'

const api = {
    // 值守列表
    arrange_list(params){
        const { pageNum, pageSize } = params
        return restAPI_GET({ url: ARRANGE_LIST + `?page=${pageNum}&size=${pageSize}` })
    },

    // 用户管理列表
    user_list: (data) => {
        return restAPI_POST({ 
            url: USER_LIST,
            data,
        })
    },

};


export {
    api,
}
