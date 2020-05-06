import { createSelector } from 'reselect'
import idx from 'idx'
import moment from 'moment'
const BigNumber = require('bignumber.js')

import isEmpty from 'lodash/isEmpty'
import split from 'lodash/split'
import toUpper from 'lodash/toUpper'
import toNumber from 'lodash/toNumber'
import toString from 'lodash/toString'
import reduce from 'lodash/reduce'
import each from 'lodash/each'
import map from 'lodash/map'
import uniq from 'lodash/uniq'
import filter from 'lodash/filter'
import size from 'lodash/size'
import find from 'lodash/find'
import unset from 'lodash/unset'
import concat from 'lodash/concat'

import { requestFetchTypes } from '../../Actions/AccountAction'
import fixedLengthNumber, { toFixed } from '../../../utils/fixedLengthNumber'
import { getTruthTime } from '../../../utils/getTruthTime'

const initialState = {
    isFetching: false,
    error: null,
    data: null,
}

export default function accountReducer(state = initialState, action = {}) {
    // console.log(action)
    switch (action.type) {
        case requestFetchTypes.REQUEST:
            return {
                isFetching: true,
                error: null,
                data: {
                    account_name: idx(action, _ => _.params.account),
                },
            }
        case requestFetchTypes.FAILURE:
            return {
                isFetching: false,
                error: action.error,
                data: null,
            }
        case requestFetchTypes.SUCCESS:
            return {
                isFetching: false,
                error: null,
                data: action.response,
            }
        default:
            return state
    }
}

export const accountError = state => state.accountReducer.error

export const account = state => state.accountReducer.data || {}

export const accountCreator = state => idx(account(state), _ => _.creator) || ''

export const accountCreatedTrxId = state => idx(account(state), _ => _.created_trx_id)

export const accountName = state => idx(account(state), _ => _.account_name) || '---'

export const accountCreated = state => {
    const created = idx(account(state), _ => _.created)

    return created ? `${getTruthTime(created)}` : '---'
}

const numWithMetricStringTransform = numWthMetricString => {
    const [number, metric] = split(numWthMetricString, ' ')
    
    return metric ? `${fixedLengthNumber({ number })} ${metric}` : `----`
}

const numWithMetricStringTransform4Digits = numWthMetricString => {
    const [number, metric] = split(numWthMetricString, ' ')
    return metric ? `${fixedLengthNumber({ number, forcedDecimalAccuracy: 4 })} ${metric}` : `----`
}

export const accountAssetsList = state => {
    const accountObj = account(state)

    const availableBalance = numWithMetricStringTransform4Digits(idx(accountObj, _ => _.available) || 0)
    const cpuTotalStaked = numWithMetricStringTransform4Digits(idx(accountObj, _ => _.cpu_total_staked) || 0)
    const netTotalStaked = numWithMetricStringTransform4Digits(idx(accountObj, _ => _.net_total_staked) || 0)
    const stakeToOthers = numWithMetricStringTransform4Digits(idx(accountObj, _ => _.stake_to_others) || 0)
    const refund = numWithMetricStringTransform4Digits(idx(accountObj, _ => _.refund) || 0)

    return {
        availableBalance,
        cpuTotalStaked,
        netTotalStaked,
        stakeToOthers,
        redeeming: refund,
    }
}
export const accountRateValue = state => state.tokenReducer.rateValue

export const accountTotalAssets = state => {
    const accountObj = account(state)

    const [totalBalance, unit] = split(idx(accountObj, _ => _.totalBalance) || `0 FSC`, ' ')
    const rateValueArr = accountRateValue(state) || []

    let usdValue = '---';
    if(rateValueArr.length>0){
        for ( let i = 0; i<rateValueArr.length; i++){
            if(rateValueArr[i].base === 'FSC'){
                usdValue = fixedLengthNumber({number:rateValueArr[i].rate * totalBalance,forcedDecimalAccuracy: 2})
            }
        }
    }
    
    return {
        totalBalance: numWithMetricStringTransform4Digits(`${totalBalance} FSC`),
        usdValue: usdValue +' USD' ,
    }
}

export const RESOURCE_CATEGORIES = [
    { name: 'ram', metric: 'KB' },
    { name: 'cpu', metric: 'Sec' },
    { name: 'net', metric: 'MB' },
]

const KB = 1024
const MB = 1024 * 1024
const GB = 1024 * 1024 * 1024

const transformToKB = num => toFixed((num / 1024).toFixed(4), 2)
const transformToMB = num => toFixed((num / 1024 / 1024).toFixed(4), 2)
const transformToGB = num => toFixed((num / 1024 / 1024 / 1024).toFixed(4), 2)
const transformToSec = num => toFixed((num / 1000 / 1000).toFixed(4), 2)
const transformToMin = num => toFixed((num / 1000 / 1000 / 60).toFixed(4), 2)
const transformToHour = num => toFixed((num / 1000 / 1000 / 60 / 60).toFixed(4), 2)

const resourceRamNetTransform = resource => {
    let resourceNum = toNumber(resource)

    if (isNaN(resourceNum)) {
        return `---`
    }

    if (resourceNum >= KB && resourceNum < MB) {
        return `${transformToKB(resource)} KB`
    }

    if (resourceNum >= MB && resourceNum < GB) {
        return `${transformToMB(resource)} MB`
    }

    if (resourceNum >= GB) {
        return `${transformToGB(resource)} GB`
    }

    return `${resourceNum} B`
}

const resourceCpuTransform = resource => {
    let resourceNum = toNumber(resource)

    if (isNaN(resourceNum)) {
        return `---`
    }

    return `${transformToSec(resource)} Sec`
}

const resourceList = accountObj => {
    const resources = reduce(
        RESOURCE_CATEGORIES,
        (resourcesObj, { name, metric }) => {
            let used = 0
            let available = 0
            let invalid = false
            let loading = !accountObj

            switch (name) {
                case 'ram':
                    used = toNumber(idx(accountObj, _ => _[`${name}_usage`]))
                    available = toNumber(idx(accountObj, _ => _[`${name}_available`]))
                    invalid = available < 0
                    break
                case 'cpu':
                    used = toNumber(idx(accountObj, _ => _[`${name}_limit`].used))
                    available = toNumber(idx(accountObj, _ => _[`${name}_limit`].available))
                    invalid = available < 0
                    break
                case 'net':
                    used = toNumber(idx(accountObj, _ => _[`${name}Limit`].used))
                    available = toNumber(idx(accountObj, _ => _[`${name}Limit`].available))
                    invalid = available < 0
                    break

                default:
                    break
            }

            let usedFixed
            let availableFixed
            let totalFixed

            switch (metric) {
                case 'KB':
                // usedFixed = resourceRamNetTransform(used)
                // availableFixed = resourceRamNetTransform(available)
                // totalFixed = resourceRamNetTransform(used + available)
                // break
                case 'MB':
                    usedFixed = resourceRamNetTransform(used)
                    availableFixed = resourceRamNetTransform(available)
                    totalFixed = resourceRamNetTransform(used + available)
                    break
                case 'Sec':
                    usedFixed = resourceCpuTransform(used)
                    availableFixed = resourceCpuTransform(available)
                    totalFixed = resourceCpuTransform(used + available)
                default:
                    break
            }

            return {
                ...resourcesObj,
                [name]: {
                    name: toUpper(name),
                    percent: invalid ? 30 : (available / (used + available)) * 100 - 0.001,
                    remaining: loading ? '- / -' : invalid ? `∞ / ∞` : `${availableFixed} / ${totalFixed}`,
                    totalStaked:
                        numWithMetricStringTransform4Digits(idx(accountObj, _ => _[`${name}_total_staked`])) ||
                        `--- FSC`,
                    selfStaked:
                        numWithMetricStringTransform4Digits(idx(accountObj, _ => _[`${name}_self_staked`])) ||
                        `--- FSC`,
                    otherStaked:
                        numWithMetricStringTransform4Digits(idx(accountObj, _ => _[`${name}_other_staked`])) ||
                        `--- FSC`,
                    redeeming:
                        numWithMetricStringTransform4Digits(idx(accountObj, _ => _[`${name}_refund`])) || `--- FSC`,
                },
            }
        },
        {}
    )

    return resources
}

export const accountResourceList = createSelector(
    account,
    resourceList
)

export const accountPermissions = state => idx(account(state), _ => _.permissions)

export const accountOwnerPermission = state => {
    const ownerPermission = find(accountPermissions(state), o => o.permName === 'owner')
    return ownerPermission
}

export const accountPermissionsWithoutOwner = state =>
    filter(accountPermissions(state), o => o.permName !== accountOwnerPermission(state).permName)

export const accountPermissionTree = state => {
    const permissions = idx(account(state), _ => _.permissions)

    if (isEmpty(permissions)) {
        return []
    }

    const ownerPermission = accountOwnerPermission(state)

    const restPermissions = accountPermissionsWithoutOwner(state)

    const permissonsWithOwnerAtHeader = concat(ownerPermission, restPermissions)

    const permissionTree = reduce(
        permissonsWithOwnerAtHeader,
        (permissionTreeObj, permissionObj) => {
            let newPermission = permissionObj
            each(permissions, o => {
                if (o.parent === permissionObj.permName) {
                    newPermission = {
                        ...newPermission,
                        childPermissions: [...(newPermission.childPermissions || []), o],
                    }
                }
            })

            return {
                ...permissionTreeObj,
                [permissionObj.permName]: newPermission,
            }
        },
        {}
    )
    // console.log('permissionTree is', permissionTree)
    // unset(permissionTree, ownerPermission.permName)

    return permissionTree
}

export const accountOwnerPermissionWithChild = state => {
    const ownerPermission = accountPermissionTree(state)['owner']
    return ownerPermission
}
