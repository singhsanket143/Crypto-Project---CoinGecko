export function numToCrConvert (num) {
    let result = Number(num) / 10000000;
    return result.toFixed(3);
}

export function getDecimalNum (decimal){
        if(Math.floor(decimal.valueOf()) === decimal.valueOf()) return 0;
        return decimal.toString().split(".")[1].length || 0; 
}

export function longDecimalToShort (decimal){
    if (getDecimalNum(decimal) > 6){
        return decimal.toFixed(6);
    }
    return decimal;
}