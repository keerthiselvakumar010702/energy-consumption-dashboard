import React, { useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { InputLabel, Typography } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import BoltIcon from "@mui/icons-material/Bolt";
import Dropdown from "./Dropdown";
// import LineChart from "./LineChart";
// import BarChart from "./BarChart";
// import ScatterChart from "./ScatterChart";
import { Data } from "./Types";
import { stringify } from "querystring";
import Calculation from "./Calculation";
import Calendar from "./Calendar";
import { format } from "date-fns";
import dayjs from "dayjs";
import WeeklyChart from "./Charts/WeeklyChart";
import MonthlyChart from "./Charts/MonthlyChart";
import YearlyChart from "./Charts/YearlyChart";
const PaperGird: React.FC = () => {
  const [deviceName, setDeviceName] = useState("");
  const [startDate, setStartDate] = useState<Date | null|string>();
  const [endDate, setEndDate] = useState<Date | null | string>();
    const [data, setData] = useState<Data | any>();

  const handleDropdown = (value: React.SetStateAction<string>) => {
    setDeviceName(value);
    // console.log("hello");
    // console.log(startDate);
    // console.log(endDate);
    
    
    console.log(deviceName);
  };
  const handleStartDate =(date: Date | any)=>{
    // setStartDate(new Date(value));
    // var formattedStartDate = dayjs(value).format("YYYY-MM-DD");
    console.log(date);
    
     setStartDate(date);

    console.log(startDate);
    
  }
  const handleEndDate =(date: Date | any)=>{
    // let formattedEndDate = dayjs(value).format("YYYY-MM-DD");
    setEndDate(date);
    console.log(endDate);

  }
  // const start = new Date(startDate).toLocaleDateString();
  // console.log(start);
  // const end = new Date(endDate).toLocaleDateString();
  // console.log(end);
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
        <Paper
            variant="outlined"
            square
            sx={{
              height: "100px",
              boxShadow: 15,
              background:
                "url(https://t4.ftcdn.net/jpg/01/19/59/99/360_F_119599925_6LWokxQhEIVE0rymMRjqrhwXzytbZSiV.jpg)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              margin: "auto",
              marginBlockStart: "20px",
            }}
          >
            <Dropdown deviceName={deviceName} handleDropdown={handleDropdown} />
            <Calendar  startDate={startDate}
            endDate={endDate} handleStartDate={handleStartDate} handleEndDate={handleEndDate} />
            {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                //   defaultValue={new stringify('04-04-2023')}
                label="From Date"
                // value={start}
                // format="yyyy-MM-dd"
                onChange={(newValue: any) => setStartDate(newValue)}
                sx={{ marginBlockStart: "18px ", width: "300px" }}
              />

              <DatePicker
                label="To Date"
                // value={endDate}
                onChange={(newValue: any) => setEndDate(newValue)}
                sx={{
                  marginBlockStart: "18px ",
                  width: "300px",
                  marginLeft: "20px",
                  paddingRight: "20px",
                }}
              />
            </LocalizationProvider> */}
          </Paper>
          <Grid item xs={4}>
            
            <Paper
              variant="outlined"
              square
              sx={{ height: "300px", boxShadow: 15 }}
            >
              <Paper
                variant="outlined"
                square
                sx={{
                  background: "linear-gradient(to left, #56ab2f, #a8e063)",
                  width: "360px",
                  margin: "auto",
                  position: "relative",
                  height: "250px",
                }}
              >
                   <WeeklyChart
                  deviceName={deviceName}
                  startDate={startDate}
                  endDate={endDate}
                />
              </Paper>
              <Typography>
                <BoltIcon />
                Weekly Consumption
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={4}>
            <Paper
              variant="outlined"
              square
              sx={{ height: "300px", boxShadow: 15 }}
            >
              <Paper
                variant="outlined"
                square
                sx={{
                  background: "linear-gradient(to right, #ffb75e, #ed8f03)",
                  width: "360px",
                  margin: "auto",
                  position: "relative",
                  height: "250px",
                }}
              >
                <MonthlyChart
                  deviceName={deviceName}
                  startDate={startDate}
                  endDate={endDate}
                />
              </Paper>
              <Typography>
                <BoltIcon />
                Monthly Consumption
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={4}>
            <Paper
              variant="outlined"
              square
              sx={{ height: "300px", boxShadow: 15 }}
            >
              <Paper
                variant="outlined"
                square
                sx={{
                  background: " linear-gradient(to left, #e53935, #e97a7a)",
                  // background: 'linear-gradient(to top, #ff0844 0%, #ffb199 100%)',
                  width: "360px",
                  margin: "auto",
                  position: "relative",
                  height: "250px",
                }}
              >
                <YearlyChart
                  deviceName={deviceName}
                  startDate={startDate}
                  endDate={endDate}
                />
             
              </Paper>
              <Typography>
                <BoltIcon />
                Yearly Consumption
              </Typography>
            </Paper>
          </Grid>
          {/* <Grid item xs={4}> */}
         
        
        </Grid>
        <Calculation />
      </Box>
    </>
  );
};

export default PaperGird;
