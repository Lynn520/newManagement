/*srg后期扩展过滤器*/
import { isEmpty } from 'lodash'
//精度处理，字符串截取
import { getSessionStorage, setSessionStorage } from './localStorage'
let name
export const filterName = name => {
    //替换字母暂不考虑
    if (!name && name != '0') {
        return '--'
    } else {
        name += ''
        /*   if (name.substring(0, 1) == 'C' || name.substring(0, 1) == 'T') {
            name = name.substring(1, name.length);
        }*/
        if (name.length > 10) {
            name = name.substring(0, 9)
        }
        return name
    }
}

//数字字符串精度处理srg 2019.6.2封装
export const del = num => {
    //数字/字符串进来过滤字符
    let num1 = num.toString()
    let result = num1.indexOf('.')
    if (result != -1) {
        /*  //console.log("含有小数点");
        //获取小数点前的位数
        let str_num = parseInt(num1.substring(0,num1.indexOf('.')));
        //let sumResult = num1.substring(0,1)
        if(str_num >=1 ){
            return parseInt(str_num).toFixed(2);
        }else if (str_num<1){
            return parseInt(str_num).toFixed(4);
        }*/
        //console.log("含有小数点");
        //获取小数点前的位数
        let str_num = parseInt(num1.substring(0, num1.indexOf('.')))
        //let sumResult = num1.substring(0,1)
        if (str_num >= 1) {
            return num1.substring(0, num1.indexOf('.') + 3)
            //return parseInt(str_num).toFixed(2);
        } else if (str_num < 1) {
            return num1.substring(0, num1.indexOf('.') + 5)
            //return parseInt(str_num).toFixed(4);
        }
    } else {
        //console.log("不含小数点");
        if (parseInt(num) >= 1) {
            return num + '.00'
        } else if (parseInt(num) < 1) {
            return num + '.0000'
        }
    }
}

export const del2 = num => {
    //数字/字符串进来过滤字符
    let num1 = num.toString()
    let result = num1.indexOf('.')
    if (result != -1) {
        //console.log("含有小数点");
        //获取小数点前的位数
        let str_num = parseInt(num1.substring(0, num1.indexOf('.')))
        //let sumResult = num1.substring(0,1)
        if (str_num >= 1) {
            return num1.substring(0, num1.indexOf('.') + 3)
            //return parseInt(str_num).toFixed(2);
        } else if (str_num < 1) {
            return num1.substring(0, num1.indexOf('.') + 5)
            //return parseInt(str_num).toFixed(4);
        }
    } else {
        //console.log("不含小数点");
        if (parseInt(num) >= 1) {
            return num.toFixed(2)
        } else if (parseInt(num) < 1) {
            return num.toFixed(4)
        }
    }
}

//模拟头像背景srg

export const tranColor = name => {
    var str = ''
    for (var i = 0; i < name.length; i++) {
        str += parseInt(name[i].charCodeAt(0), 10).toString(16)
    }
    return '#' + str.slice(1, 4)
}

export const arrayColor = [
    '#21305D',
    '#3D68EB',
    '#d9e7ff',
    '#00bd9a',
    '#FF0000',
    '#0099ff',
    '#f3cf55',
    '#ffa505',
    '#6897bb',
    '#ffc0cb',
    '#ff7373',
    '#ff4646',
]

//字符串空格替换srg
export const moveSpace = str => {
    //console.log(str);
    let str1 = str.toString()
    return str1.replace(/[ ]/g, '')
}

//字符串过滤字母srg
export const dislodge = str => {
    let result
    let reg = /[a-zA-Z]+/
    while ((result = str.match(reg))) {
        //判断str.match(reg)是否没有字母了
        str = str.replace(result[0], '') //替换掉字母  result[0] 是 str.match(reg)匹配到的字母
    }
    return str
}

//对象浅克隆srg
export const objClone = obj => {
    return Object.assign({}, obj)
}

//字节单位自适应换算srg
export const getDisplayFormart = QuotaBytes => {
    if (QuotaBytes > 1024 * 1024 * 1024) {
        return `${(QuotaBytes / (1024 * 1024 * 1024))
            .toString()
            .substring(0, (QuotaBytes / (1024 * 1024 * 1024)).toString().indexOf('.') + 3)}GB`
    } else if (QuotaBytes > 1024 * 1024) {
        return `${(QuotaBytes / (1024 * 1024))
            .toString()
            .substring(0, (QuotaBytes / (1024 * 1024)).toString().indexOf('.') + 3)}MB`
    } else if (QuotaBytes > 1024) {
        return `${(QuotaBytes / 1024).toString().substring(0, (QuotaBytes / 1024).toString().indexOf('.') + 3)}KB`
    } else if (QuotaBytes < 1024) {
        return `${(QuotaBytes / 1024).toString().substring(0, (QuotaBytes / 1024).toString().indexOf('.') + 3)}KB`
    }
}

//秒单位自适应换算srg
/*RAM: bytes,KiB,MiB，GiB,TiB
CPU: us(纳秒),ms（毫秒）,sec（秒）,min（分),hr(小时)
NET:同RAM*/

export const getDisplayFormartMs = QuotaBytes => {
    if (QuotaBytes > 1000 * 1000 * 60 * 6011) {
        return `${(QuotaBytes / (1000 * 1000 * 60 * 6011))
            .toString()
            .substring(0, (QuotaBytes / (1000 * 1000 * 60 * 6011)).toString().indexOf('.') + 3)}h`
    } else if (QuotaBytes > 1000 * 1000 * 60) {
        return `${(QuotaBytes / (1000 * 1000 * 60))
            .toString()
            .substring(0, (QuotaBytes / (1000 * 1000 * 60)).toString().indexOf('.') + 3)}min`
    } else if (QuotaBytes > 1000 * 1000) {
        return `${(QuotaBytes / (1000 * 1000))
            .toString()
            .substring(0, (QuotaBytes / (1000 * 1000)).toString().indexOf('.') + 3)}sec`
    } else if (QuotaBytes > 1000) {
        return `${(QuotaBytes / 1000).toString().substring(0, (QuotaBytes / 1000).toString().indexOf('.') + 3)}ms`
    } else if (QuotaBytes < 1000) {
        return `${(QuotaBytes / 1000).toString().substring(0, (QuotaBytes / 1000).toString().indexOf('.') + 3)}us`
    }
}

/*
  秒单位自适应换算
  remaining: "6474.13 Sec / 6474.14 Sec"
  CPU: ms（毫秒）,sec（秒）,min（分),hr(小时)
*/
export const formatSeconds = value => {
    const arr = value.split('/')
    let arr1 = arr && arr[0]
    let arr2 = arr && arr[1]
    let _res1
    let _res2
    function handleSeconds (_value) {
        // >60秒 转化为 10进制小时比例
        let theTime = parseFloat(_value)
        let min = 0 // 分钟
        let hour = 0 // 小时10进制
        let result
        if (theTime > 60) {
            // 分钟转化
            min = theTime / 60
            // 小时转化
            hour = min / 60
        }
        if (hour >= 1) {
            result = `${hour.toFixed(2)} hr`
        } else if (min >= 1) {
            result = `${min.toFixed(2)} min`
        } else {
            result = _value
        }
        return result
    }
    _res1 = arr1 ? handleSeconds(arr1) : 0
    _res2 = arr2 ? handleSeconds(arr2) : 0
    return `${_res1} / ${_res2}`
}


let globalLoadingArr = []
export const showLoading = () => {
    let ele = document.getElementById('global-loading-container')
    if (!ele) {
        return false
    }
    if (globalLoadingArr.length === 0) {
        ele.style.display = 'block'
    }
    globalLoadingArr.push(true)
}
export const hideLoading = forceHide => {
    let ele = document.getElementById('global-loading-container')
    if (!ele) {
        return false
    }
    if (globalLoadingArr.length <= 2 || forceHide) {
        ele.style.display = 'none'
    }
    globalLoadingArr.shift()
    if (forceHide) {
        globalLoadingArr = []
    }
}

export const queryMobile = () => document.documentElement.clientWidth < 800
export const getMobileK = () => document.documentElement.clientWidth / 375
//存储每页的浏览位置
export const savaPageScrollData = (location = { pathname: '', search: '' }, scrollTop = 0) => {
    let { pathname, search } = location
    let pageScrollData = getSessionStorage('pageScrollData') || {}
    pathname = pathname.replace(/[\/\\]/g, '')
    search = search.replace(/[\?\&\=]/g, '')
    let key = pathname + '_' + search
    pageScrollData[key.slice(0, 30)] = scrollTop
    setSessionStorage('pageScrollData', pageScrollData)
}
//获取每页的浏览位置
export const getPageScrollData = (location = { pathname: '', search: '' }) => {
    let { pathname, search } = location
    let pageScrollData = getSessionStorage('pageScrollData') || {}
    pathname = pathname.replace(/[\/\\]/g, '')
    search = search.replace(/[\?\&\=]/g, '')
    let key = pathname + '_' + search
    return pageScrollData[key.slice(0, 30)] || 0
}

export const getScrollTop = () => document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop

// 查找语言
export const findLanguage = languageStatus => {
    // zh en ja ko
    switch (languageStatus) {
        case 'Chinese':
            languageStatus = 'zh'
            break
        case 'English':
            languageStatus = 'en'
            break
        case 'Japanese':
            languageStatus = 'ja'
            break
        case 'Korea':
            languageStatus = 'ko'
            break
        default:
            languageStatus = 'zh'
    }
    return languageStatus
}
