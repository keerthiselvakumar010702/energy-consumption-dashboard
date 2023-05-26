import React from "react";
import { SideBar } from "./SideBar";
import Heading from "./Heading";
import { Box } from "@mui/material";
import PaperGird from "./Gird";

const Main = () => {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          background:
            "url(https://t4.ftcdn.net/jpg/01/19/59/99/360_F_119599925_6LWokxQhEIVE0rymMRjqrhwXzytbZSiV.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <SideBar />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 2,
          }}
        >
          <Heading />
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              p: 1,
              marginBlockStart: "50px",
            }}
          >
            <PaperGird />
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Main;
