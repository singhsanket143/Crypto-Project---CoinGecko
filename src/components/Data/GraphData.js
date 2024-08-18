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
    
    let market_CapData = dataArray?.market_caps.map((item) => {
        return item[1]
    })

    market_CapData.pop()

    return {
        timeData, priceData, market_CapData
    }
}

