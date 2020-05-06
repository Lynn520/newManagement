import toString from 'lodash/toString'
import toNumber from 'lodash/toNumber'
import split from 'lodash/split'
import { compose } from 'redux'
const BigNumber = require('bignumber.js')

const withDecimalPrecision = (numberString, len) => {
    let numStr = numberString
    for (let i = 0; i < len; i++) {
        numStr = numStr + '0'
    }
    return numStr
}

const noDecimal = numberString => {
    const numberStringArray = split(numberString, '.')

    return numberStringArray.length === 1
}

export const toFixed = (numberString, len) => {
    if (isNaN(toNumber(numberString))) {
        return '-'
    }

    const numberStringArray = split(numberString, '.')

    let numberStringToReturn

    if (numberStringArray.length === 1) {
        numberStringToReturn = withDecimalPrecision(`${numberString}.`, len)
    } else {
        const [integer, decimal] = numberStringArray

        if (decimal.length < len) {
            const offset = len - decimal.length
            numberStringToReturn = `${integer}.${withDecimalPrecision(decimal, offset)}`
        } else if (numberString.length > len) {
            numberStringToReturn = `${integer}.${decimal.substring(0, len)}`
        } else {
            numberStringToReturn = numberString
        }
    }

    if (isNaN(toNumber(numberStringToReturn))) {
        return '-'
    }
    return numberStringToReturn
}

export const noExponents = num => {
    const numToReturn = BigNumber(num).toFixed()
    return numToReturn
}

const fixedLengthNumber = ({ number, length = 13, zeroAccuracy = 2, forcedDecimalAccuracy = 0 } = {}) => {
    const fixedNumberStringInit = compose(
        noExponents,
        toString
    )(number)

    const lengthToUse = length

    let fixedNumberString = fixedNumberStringInit.substring(0, lengthToUse)

    if (fixedNumberString.charCodeAt(lengthToUse) === '.') {
        fixedNumberString = fixedNumberString.substring(0, lengthToUse - 1)
    }

    let fixedNumber = noExponents(toNumber(fixedNumberString))

    if (noDecimal(fixedNumber) && fixedNumber.length < 8) {
        fixedNumber = toFixed(fixedNumber, zeroAccuracy)
    } else {
        if (forcedDecimalAccuracy) {
            fixedNumber = toFixed(fixedNumber, forcedDecimalAccuracy)
        }
    }

    if (isNaN(fixedNumber)) {
        return toFixed(0, zeroAccuracy)
    }

    return fixedNumber
}

export default fixedLengthNumber
