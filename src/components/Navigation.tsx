import React from "react";

import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from "@mui/material";
import { Link, Route, Routes } from 'react-router-dom';

import FlagIcon from '@mui/icons-material/Flag';
import ListIcon from '@mui/icons-material/List';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import DashboardIcon from '@mui/icons-material/Dashboard';
import Dashboard from "./Dashboard.tsx";
import Calendar from "./Calendar.tsx";
import ToDo from "./ToDo.tsx";
import Goals from "./Goals.tsx";

const drawerWidth = 240;

function Navigation() {
    return(
        <>
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
            <Toolbar />
            <Box sx={{ overflow: 'auto' }}>
            <List>
                <ListItem>
                    <ListItemButton component={Link} to="/dashboard">
                        <ListItemIcon>
                            <DashboardIcon />
                        </ListItemIcon>
                        <ListItemText primary="Dashboard" />
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton component={Link} to="/calendar">
                        <ListItemIcon>
                            <CalendarMonthIcon />
                        </ListItemIcon>
                        <ListItemText primary="Calendar" />
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton component={Link} to="/todo">
                        <ListItemIcon>
                            <ListIcon />
                        </ListItemIcon>
                        <ListItemText primary="To Do" />
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton component={Link} to="/goals">
                        <ListItemIcon>
                            <FlagIcon />
                        </ListItemIcon>
                        <ListItemText primary="Goals" />
                    </ListItemButton>
                </ListItem>
            </List>
            </Box>
        </Drawer>
        <Box 
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 2 }}>
            <Toolbar />
            <Routes>
                <Route path="/dashboard" element={<Dashboard />}/>
                <Route path="/calendar" element={<Calendar />}/>
                <Route path="/todo" element={<ToDo />}/>
                <Route path="/goals" element={<Goals />}/>
            </Routes>
        </Box>
      </>
    )
}

export default Navigation