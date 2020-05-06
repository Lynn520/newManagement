import moment from 'moment'

export const getTruthTime = (time) => {
    let timeLocal
    const timeStr = time + "Z"
    let nowDate =  new Date(timeStr).getTime()
    timeLocal = moment(nowDate).format('YYYY-MM-DD HH:mm:ss')
    return timeLocal
}

export const getTruthTimeStamp = (time) => {
    let timeLocal
    timeLocal = moment(time).format('YYYY-MM-DD HH:mm:ss')
    return timeLocal
}