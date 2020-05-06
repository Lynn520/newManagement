//币种前面去掉F
export const replaceSymbolToDisplay = symbolStr => {
    let type = typeof symbolStr
    if (type !== 'string') {
        console.log('requrie a string, get ' + type)
    }
    let result = symbolStr
        .replace('FBTC', 'BTC')
        .replace('FUSDT', 'USDT')
        .replace('FETH', 'ETH')
        .replace('FEOS', 'EOS')
    console.log(result, 'transfer F')
    return result
}