import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { ThemeProvider, createTheme } from "@mui/material/styles";
const drawerWidth = 240;
const theme = createTheme({
    components: {
      MuiDrawer: {
        styleOverrides: {
          paper: {
           border:'2px solid #413543 ',
           backgroundImage: `url(https://media.istockphoto.com/id/944965280/photo/railroad-at-night.jpg?s=612x612&w=0&k=20&c=XoszGVz8GQk7SfWhkVGfOQWXhHA3KhonzE-bi7-2XDE=)`,
            color:"white",
            backgroundRepeat:"no-repeat",
            backgroundSize:"cover"
          },
        },
      },
    },
  });
const SideBar=() =>{
  return (
    <Box sx={{ display: 'flex' }}>
  
  <ThemeProvider theme={theme}>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar ><ElectricBoltIcon /><Typography variant='h5'sx={{paddingLeft:'20px'}}>Energy</Typography> </Toolbar>
        <Box sx={{ overflow: "auto" }}>
            <List>
              {["Dashboard"].map((text, index) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <DashboardIcon sx={{color:"white"}} />
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
       
      </Drawer>
     </ThemeProvider>
    </Box>
  );
}
 export {SideBar};