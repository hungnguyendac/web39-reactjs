import React from "react";
import Chart from "react-apexcharts";

const Home = () => {
    const options1 = {
        series: [13, 43, 22],
        chart: {
            width: 380,
            type: "pie",
        },
        labels: ["Balance", "Expense", "Credit Loan"],
        responsive: [
            {
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200,
                    },
                    legend: {
                        position: "bottom",
                    },
                },
            },
        ],
    };

    const options2 = {
        series: [
            {
                name: "Income",
                data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
            },
            {
                name: "Expense",
                data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
            },
            {
                name: "Transfer",
                data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
            },
        ],
        chart: {
            type: "bar",
            height: 350,
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: "55%",
                endingShape: "rounded",
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            show: true,
            width: 2,
            colors: ["transparent"],
        },
        xaxis: {
            categories: [
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
            ],
        },
        yaxis: {
            title: {
                text: "$ (thousands)",
            },
        },
        fill: {
            opacity: 1,
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return "$ " + val + " thousands";
                },
            },
        },
    };

    return (
        <>
            <main className="main-wrapper col-md-9 ms-sm-auto py-4 col-lg-9 px-md-4 border-start">
                <div className="title-group mb-3">
                    <h1 className="h2 mb-0">Overview</h1>
                    <small className="text-muted">
                        Hello Thomas, welcome back!
                    </small>
                </div>
                <div className="row my-4">
                    <div className="col-lg-12 col-12">
                        <div className="custom-block bg-white">
                            <h5 className="mb-4">History</h5>
                            <div id="pie-chart">
                                <Chart
                                    options={options1}
                                    series={options1.series}
                                    type="pie"
                                    width={380}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12 col-12">
                        <div className="custom-block bg-white">
                            <div id="chart">
                                <Chart
                                    options={options2}
                                    series={options2.series}
                                    type="bar"
                                    height={350}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <footer className="site-footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-12">
                                <p className="copyright-text">
                                    Copyright © Convert React - Design:{" "}
                                    <a rel="sponsored" href="/" target="_blank">
                                        Thuan Nguyen
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </footer>
            </main>
        </>
    );
};

export default Home;
