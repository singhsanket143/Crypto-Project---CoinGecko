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
} from 'chart.js'

ChartJS.register(
    CategoryScale, 
    LinearScale, 
    PointElement, 
    LineElement,
    Title,
    Tooltip,
    Legend,
);

function LineGraph({ dataArray }){
    const lineChartData = GraphData(dataArray)

    const options = {
        responsive: true,
        plugins:{
            legend:{
                position: "top",
            },
            title:{
                display: true,
                text: "Graph of Prices of Past 7 Days",
                position: "bottom"
            },
        },
        layout:{
            padding: 5
        },
        maintainAspectRatio: false,
    }

    return(
        <>
             <Line options={options} data={lineChartData} className="bg-white"/>
        </>
    )
}

export default LineGraph