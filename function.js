let arr = [2,5,1,9,6];
function mean(arr){
    // let sum = 0;
    // for (let i=0;i<arr.length;i++){
    //     sum += arr[i];
    // }
    
    let sum = arr.reduce((a,b)=>a+b,0)
    return sum/arr.length;
}
function median(arr){
    let sortedArr = arr.sort((a,b)=>a-b);
    console.log(sortedArr)
    return sortedArr.length %2 ===0 ?
        (sortedArr[sortedArr.length/2 -1] + sortedArr[sortedArr.length/2])/2 :sortedArr[Math.floor(sortedArr.length/2)];
    
}
function mode(arr){
    const freqTable={};
    arr.forEach(el =>freqTable[el]=(freqTable[el]+1)||1);
    let modes =[];
    let maxFreq =0;
    for (const key in freqTable){
        if(freqTable[key] >maxFreq){
            modes = [Number(key)];
            maxFreq=freqTable[key]
        }
        else if (freqTable[key]===maxFreq){
            modes.push(Number(key))
        }
       
    }
    if(modes.length === Object.keys(freqTable).length) modes=[];
       return modes;

}

function checkAndConvertValidateNumsArr(numsAsStrings){
    let numsArr = [];
    for(let i =0;i<numsAsStrings.length;i++){
        let valToNumber = Number(numsAsStrings[i]);
        if (Number.isNaN(valToNumber)) {
            return new Error(
              `The value '${numsAsStrings[i]}' at index ${i} is not a valid number.`
            );
        }
      
        numsArr.push(valToNumber);
    }
    return numsArr;
}
    
module.exports = {
    checkAndConvertValidateNumsArr,
    mean,median,mode
}