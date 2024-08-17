export function GraphData(dataArray){
    const prices = dataArray?.prices

    let timeData = prices.map((item) => {
        const coinInfo = new Date(item[0])
        const dateData = coinInfo.toLocaleDateString().split('/')
        return dateData[1]
    })

    // removing duplicate values
    timeData = [... new Set(timeData)]

    const priceData = prices.map((item) => {
        return item[1]
    })

    priceData.pop()
    console.log(priceData)


    return {
        labels: timeData,
        datasets:[
            {
                label: "Price",
                data: priceData,
                borderColor: ['#fb8500', '#2a9d8f'],
            }
        ]
    }
}

