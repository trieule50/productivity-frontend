import React from 'react'
import './App.css';
import { Box } from '@mui/material';
import Navigation from './components/Navigation.tsx';
import TopNavigation from './components/TopNavigation.tsx';

function App() {
  return (
    <Box sx={{ display: 'flex' }}>
      <TopNavigation/>
      <Navigation />
    </Box>
  );
}

export default App;
