import React, { useState, useEffect, useRef } from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import faker from 'faker'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);


const options = {
    scales: {
        y: {
            suggestedMin: 50,
            suggestedMax: 90,
            display: false,

        },
        x: {
            ticks: {
                color: '#d5d5d5',
                font: {
                    size: 16,
                    family: "'Open Sans', sans-serif"
                }

            },
            grid: {
                color: 'rgba(255, 255, 255, 0.2)',
                borderColor: 'rgba(255, 255, 255, 0.2)',
                drawBorder: true,
                drawTicks: false,
                z: 1
            },
        }
    },
    responsive: true,
    maintainAspectRatio: false,
    title: {
        display: true,
    },
    plugins: {
        filler: {
            propagate: false
        }
    }
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];


const data = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: labels.map(() => faker.datatype.number({ min: 65, max: 83 }))
        },
    ],
};

function createGradient(ctx, clientHeight) {

    const gradient = ctx.createLinearGradient(0, 0, 0, clientHeight);

    gradient.addColorStop(0.2, 'rgba(215,130,255, 1)');
    gradient.addColorStop(1, '#742EB9');

    return gradient;
}


function Chart() {
    const chartRef = useRef(null);
    const [chartData, setChartData] = useState({
        datasets: [],
    });

    const chartWrapperRef = useRef(null)




    useEffect(() => {
        const chart = chartRef.current;

        const chartWrapper = chartWrapperRef.current





        if (!chart) {
            return;
        }

        const chartData = {
            ...data,
            datasets: data.datasets.map(dataset => ({
                ...dataset,
                borderColor: createGradient(chart.ctx, chartWrapper.clientHeight),
                fill: 'start',
                backgroundColor: createGradient(chart.ctx, chartWrapper.clientHeight),
                pointRadius: 5,
                pointBorderColor: 'rgb(100, 100, 100)',
                tension: 0
            })),
        };

        setChartData(chartData);
    }, []);





    return (
        <div className="chart-wrapper"
            ref={chartWrapperRef}
        >
            <Line
                ref={chartRef}
                options={options}
                data={chartData}
            />

        </div>
    );
}

export default Chart;
