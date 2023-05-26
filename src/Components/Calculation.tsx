import { Box, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import FunctionsIcon from "@mui/icons-material/Functions";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
const Calculation = () => {
  return (
    <>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          // marginBlockStart: "18px",
        }}
      >
        <Grid container spacing={3} sx={{ marginBlockStart: "30px" }}>
          <Grid item xs={4}>
            <Paper
              variant="outlined"
              square
              sx={{ height: "150px", boxShadow: 15 }}
            >
              {/* <FunctionsIcon sx={{width:"100px"}}/> */}
              <Typography
                variant="h5"
                sx={{ padding: "20px", marginInlineStart: "30px" }}
              >
                Cummulative Consumption
              </Typography>
              <Typography variant="h5">
                <FunctionsIcon sx={{ width: "60px" }} />
                D1: 17349.04 | D2: 17569.05
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper
              variant="outlined"
              square
              sx={{ height: "150px", boxShadow: 15 }}
            >
              <Typography
                variant="h5"
                sx={{ padding: "20px", marginInlineStart: "30px" }}
              >
                Minimum Consumption
              </Typography>
              <Typography variant="h5">
                <KeyboardDoubleArrowDownIcon sx={{ width: "200px" }} />0
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper
              variant="outlined"
              square
              sx={{ height: "150px", boxShadow: 15 }}
            >
              <Typography
                variant="h5"
                sx={{ padding: "20px", marginInlineStart: "30px" }}
              >
                Maximum Consumption
              </Typography>
              <Typography variant="h5">
                <KeyboardDoubleArrowUpIcon sx={{ width: "200px" }} />2
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Calculation;
