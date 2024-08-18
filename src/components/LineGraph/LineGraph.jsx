import  { GraphData } from "../Data/GraphData"
import { Line } from 'react-chartjs-2' 

import {
    Chart as ChartJS, 
    CategoryScale, 
    LinearScale, 
    PointElement, 
    LineElement,
    Title,
    Tooltip,
    Legend,
    Colors,
} from 'chart.js'

ChartJS.register(
    CategoryScale, 
    LinearScale, 
    PointElement, 
    LineElement,
    Title,
    Tooltip,
    Legend,
    Colors
);

function LineGraph({ dataArray, currency }){
    const lineChartData = GraphData(dataArray)

    const options = {
        responsive: true,
        plugins:{
            legend:{
                position: "top",
            },
        },
        layout:{
            padding: 2
        },
        maintainAspectRatio: false,
        color: '#DCA54C',
        scales: {
            x: {
                display: true,
                title: {
                    display: true,
                    text: 'Date',
                    color: 'white', 
                },
                grid: {
                    color: '#1F1F1F', 
                },
                ticks: {
                    color: 'white', 
                },
                border: {
                    color: '#fff', 
                },
                
            },
            y: {
                display: true,
                title: {
                    display: true,
                    text: 'Price', 
                    color: 'white', 
                },
                grid: {
                    color: '#1F1F1F', 
                },
                ticks: {
                    color: 'white', 
                },
                border: {
                    color: '#fff', 
                },
                
            },
        },
    }

    return(
        <div className="flex flex-col gap-2 w-full h-full">
            <div className="h-[42%] w-full">
                <Line 
                    options={options} 
                    data={{
                        labels: lineChartData.timeData,
                        datasets:[
                            {
                                label: `Prices in ${currency.toUpperCase()}`,
                                data: lineChartData.priceData,
                                backgroundColor: '#fff',
                                borderColor: "red",
                                pointStyle: 'rect',
                                pointRadius: 4,
                                
                            }
                        ]
                    }}
                />
            </div>

            <div className="h-[42%] w-full">
                <Line 
                    options={options} 
                    data={{
                        labels: lineChartData.timeData,
                        datasets:[
                            {
                                label: `Market Cap in ${currency.toUpperCase()}`,
                                data: lineChartData.market_CapData,
                                borderColor: '#FF8F00',
                                backgroundColor: '#D90429',
                                fill: true,
                                pointRadius: 3,
                                pointStyle: 'rect',
                                tension: 0.4,
                                borderDash: [3,4],
                                borderDashOffset: 2,
                                
                            }
                        ]
                    }}
                />
            </div>
        </div>
    )
}

export default LineGraph