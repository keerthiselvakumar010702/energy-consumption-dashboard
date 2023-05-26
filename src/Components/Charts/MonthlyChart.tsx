import React, { useEffect, useState } from "react";
import { Data, Label_mapping } from "../Types";
import { Bar } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LinearScale,
  registerables,
  PointElement,
} from "chart.js";
import { Typography } from "@mui/material";
import dayjs from "dayjs";
Chart.register(CategoryScale, LinearScale, PointElement, ...registerables);
const MonthlyChart: React.FC<Data> = ({ deviceName, startDate, endDate }) => {
  const [data, setData] = useState<Data | any>();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:3001/consumption/monthly?deviceName=${deviceName}&startDate=${dayjs(startDate).format("YYYY-MM-DD")}&endDate=${dayjs(endDate).format("YYYY-MM-DD")}`

          // {
          //   method: "GET",
          //   headers: {
          //     "Content-Type": "application/json",
          //   },
          //   // body: JSON.stringify({
          //   //   deviceName: deviceName,
          //   //   startDate: startDate,
          //   //   endDate: endDate,
          //   // }),
          // }
        );

        const { data } = await response.json();
        setData(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [startDate, deviceName, endDate]);
  const chartData = {
    labels: data?.map((items: any) => items.timestamps.slice(0, 8)),
    datasets: [
      {
        label: "Energy Consumption",
        data: data?.map((items: any) => items.consumption),
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };
  return (
    <div>
      <Typography sx={{ display: "inline-block", alignItems: "flex-start" }}>
        {/* Label:{data ? data[0].y_label : "no data"} */}
      </Typography>
      <Bar data={chartData} height={"170px"} />
      <Typography
        variant="h6"
        sx={{
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        {/* {data ? data[0].x_label : "no data"} */}
      </Typography>
    </div>
  );
};
export default MonthlyChart;
