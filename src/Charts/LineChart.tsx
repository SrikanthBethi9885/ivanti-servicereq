import React, { useEffect, useRef } from 'react';
import ApexCharts from 'apexcharts';

const LineChart = () => {
    const chartRef = useRef(null);

    useEffect(() => {
        const options = {
            chart: {
                type: 'line',
                toolbar: {
                    show: false // Hide the toolbar/menu button
                },
                width: '672px',
                height: '172px'
            },
            plotOptions: {
                bar: {
                    columnWidth: '5%', // Adjust the width of the bars
                    Colors: ['#fffff', '#ffffff', '#ffffff', '#0B5B55'],  // Apply linear gradient background
                    endingShape: 'rounded' // Rounded corners for the bars
                }
            },
            series: [{
                name: 'sales',
                data: [130, 70, 90, 150, 29, 80, 190, 91, 125]
            },
            {
                name: 'profit',
                data: [150, 120, 60, 50, 129, 100, 150, 165, 155]
            }],
            xaxis: {
                categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
            }
        };

        const chart = new ApexCharts(chartRef.current, options);

        chart.render();

        // Cleanup
        return () => {
            chart.destroy();
        };
    }, []);

    return (
        <div ref={chartRef}></div>
    );
}

export default LineChart;
