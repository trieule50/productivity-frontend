import React from 'react';

import { Box, CssBaseline } from '@mui/material';

import './App.css';

import Navigation from './components/Navigation.tsx';
import TopNavigation from './components/TopNavigation.tsx';

function App() {
  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <TopNavigation/>
        <Navigation />
      </Box>
    </>
  );
}

export default App;
