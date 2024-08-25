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


export function getTime(date) {
    let hour = date.getHours();
    let munutes = date.getMinutes().toString().padStart(2, "0");
    let timeString = `${hour} : ${munutes} AM`;
    if (hour > 12) {
      timeString = `${(hour - 12).toString().padStart(2, "0")} : ${munutes} PM`;
    }
    return timeString;
  }

  export  function getPriceLabels(arr, days) {
    const labels = arr.map((item) => {
      let date = new Date(item[0]);
      let time = getTime(date);
      return days == 1 ? time : date.toLocaleDateString();
    });
    return labels;
  }

  export  function getPriceData(arr) {
    let priceData = arr.map((item) => item[1]);
    return priceData;
  }