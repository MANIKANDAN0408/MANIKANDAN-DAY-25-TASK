import React from "react";

import {

         Chart as ChartJS,
         CategoryScale,
         LinearScale,
         PointElement,
         LineElement,
         Title,
         Tooltip,
         Legend

} 
       from "chart.js";

import { Line } from "react-chartjs-2";

    ChartJS.register (

    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,

    Title,
    Tooltip,
    Legend

);

export const options = {

    responsive: true,
    maintainAspectRatio: false,

    plugins: {

        legend: {
            position: "top",
        },

        title: {

            display: false,
            text: "Chart.js Line Chart"
        }
    }
};

const labels = [
    "Jan",
    
    "Mar",
    
    "May",
    
    "July",
    
    "Sep",
    
    "Nov",
    
];

export const data = {

    labels,

    datasets: [
{
             label: "Dataset ",
             data: [
                0,
                10000,
                5000,
                15000,
                10000,
                20000,
                15000,
                25000,
                20000,
                30000,
                25000,
                40000
            ],

            borderColor: "rgb(52, 161, 234)",

            backgroundColor: "rgba(54, 163, 234, 0.6)",

            lineTension: 0.3

        }
    ]
};

export function EarningsOverview() {

    return <Line options={options}

     data={data} />;
}