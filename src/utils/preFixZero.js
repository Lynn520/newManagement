const preFixZero = (num,len) =>{
    if (isNaN(num)) {
        return '-'
    }
    let numStr, fixNumStr,int;
    const numString = num.toString()
    if(numString.indexOf('.')>0){
        int = numString.slice(0,(numString).indexOf('.')) || numString;
        numStr = numString.slice((numString).indexOf('.')+1);
        if(numStr.length>len){
            fixNumStr = int +'.'+ numStr.slice(0,len)
        }else if(numStr.length<len){
            fixNumStr = int +'.' + numStr + Array(len+1 - numStr.length).join(0)
        }else if(numStr.length==len){
            fixNumStr = int+'.' + numStr
        } 
    }else{
        fixNumStr = numString+'.'+Array(len+1).join(0)
    }
    return fixNumStr
}

export default preFixZero