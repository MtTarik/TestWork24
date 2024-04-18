import React from "react";
import dynamic from "next/dynamic";
import {useTheme} from "@mui/material/styles";
import {Avatar, Box, Stack, Typography,} from "@mui/material";
import DashboardCard from "../shared/DashboardCard";

const Chart = dynamic(() => import("react-apexcharts"), {ssr: false});


const SalesOverview = () => {

    const theme = useTheme();
    const primary = theme.palette.primary.main;
    const secondary = theme.palette.secondary.main;

    const optionscolumnchart: any = {
        chart: {
            type: "bar",
            height: 315,
            offsetX: -15,
            toolbar: {show: false},
            foreColor: "#adb0bb",
            fontFamily: "inherit",
            sparkline: {enabled: false},
        },
        colors: [primary, secondary],
        fill: {type: "solid", opacity: 1},
        plotOptions: {
            bar: {horizontal: false, columnWidth: "35%", borderRadius: 0},
        },
        grid: {
            show: false,
            borderColor: "transparent",
            padding: {left: 0, right: 0, bottom: 0},
        },
        dataLabels: {enabled: false},
        markers: {size: 0},
        legend: {show: false},
        xaxis: {
            type: "category",
            categories: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Нд"],
            axisBorder: {
                show: false,
            },
        },
        yaxis: {
            show: true,
            min: 100,
            max: 400,
            tickAmount: 3,

        },

        stroke: {
            show: true,
            width: 5,
            lineCap: "butt",
            colors: ["transparent"],
        },
        tooltip: {
            theme: theme.palette.mode === "dark" ? "dark" : "light",
            fillSeriesColor: false,
        },
    };
    const seriescolumnchart = [
        {name: "Тест", data: [355, 390, 300, 350, 390, 180, 250]},
        {name: "Тест", data: [280, 250, 325, 215, 250, 310, 170]},
    ];

    return (
        <>

            <DashboardCard
                title="Огляд"
                action={
                    <Stack spacing={3} mt={5} direction="row">
                        <Stack direction="row" spacing={1} alignItems="center">
                            <Typography
                                variant="subtitle2"
                                fontSize="12px"
                                color="primary.main"
                            >
                                Шось
                            </Typography>
                        </Stack>
                        <Stack direction="row" spacing={1} alignItems="center">
                            <Avatar
                                sx={{
                                    width: 9,
                                    height: 9,
                                    bgcolor: secondary,
                                    svg: {display: "none"},
                                }}
                            ></Avatar>
                            <Typography
                                variant="subtitle2"
                                fontSize="12px"
                                color="secondary.main"
                            >
                                Шось
                            </Typography>
                        </Stack>
                    </Stack>
                }
            >
                <Box height="355px">
                    <Chart
                        options={optionscolumnchart}
                        series={seriescolumnchart}
                        type="bar"
                        height={355}
                        width={"100%"}
                    />
                </Box>
            </DashboardCard>
        </>
    );
};

export default SalesOverview;
