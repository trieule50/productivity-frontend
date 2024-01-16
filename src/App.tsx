import React from 'react';

import { Routes, Route } from 'react-router-dom';
import { Box, CssBaseline, Toolbar } from '@mui/material';

import './App.css';

import Calendar from './components/Calendar.tsx';
import Dashboard from "./components/Dashboard.tsx";
import Goals from './components/Goals.tsx';
import Navigation from './components/Navigation.tsx';
import ToDo from './components/ToDo.tsx';
import TopNavigation from './components/TopNavigation.tsx';

function App() {
  return (
    <>
      <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <TopNavigation/>
      <Navigation />
      </Box>
      <Box 
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}>
          <Toolbar />
          <Routes>
                <Route path="/dashboard" element={<Dashboard />}/>
                <Route path="/calendar" element={<Calendar />}/>
                <Route path="/todo" element={<ToDo />}/>
                <Route path="/goals" element={<Goals />}/>
          </Routes>
      </Box>
    </>
  );
}

export default App;
