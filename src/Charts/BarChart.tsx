import React, { useEffect, useRef } from 'react'
import ApexCharts from 'apexcharts';

const Barchart = () => {
    const chartRef = useRef(null);

    useEffect(() => {
        const options = {
            chart: {
                type: 'bar',
                toolbar: {
                    show: false // Hide the toolbar/menu button
                },
                width: '420px',
                height: '209px'
            },
            plotOptions: {
                bar: {
                    columnWidth: '15%', // Adjust the width of the bars
                    Colors: ['#fffff', '#ffffff', '#ffffff', '#0B5B55'],  // Apply linear gradient background
                    endingShape: 'rounded' // Rounded corners for the bars
                }
            },
            series: [{
                name: 'sales',
                data: [130, 70, 90, 150, 29, 80, 190, 91, 125]
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

export default Barchart
