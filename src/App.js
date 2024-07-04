import React, { useState } from "react";
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import StaticHomebar from './components/Head/StaticHomebar';
import SubHeader from './components/Head/SubHeader';
import Footer from './components/Foot/Footer';
import Footer2 from './components/Foot/Footer2';
import CarouselImages from './components/Carousel/CarouselImages';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Switch, Box, Typography } from "@mui/material";

function App() {
  // state to manage the dark mode
  const [toggleDarkMode, setToggleDarkMode] = useState(true);

  // function to toggle the dark mode as true or false
  const toggleDarkTheme = () => {
    setToggleDarkMode(!toggleDarkMode);
  };

  // applying the primary and secondary theme colors
  const darkTheme = createTheme({
    palette: {
      mode: toggleDarkMode ? 'dark' : 'light', // handle the dark mode state on toggle
      primary: {
        main: '#90caf9',
      },
      secondary: {
        main: '#131052',
      },
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Router>
        <StaticHomebar />
        <Box sx={{ display: 'flex', justifyContent: 'right', alignItems: 'center', padding: 1 }}>
          <Typography variant="h6" sx={{ marginRight: 2 }}>
            Toggle Dark Mode
          </Typography>
          <Switch checked={toggleDarkMode} onChange={toggleDarkTheme} />
        </Box>
        <CarouselImages />
        <SubHeader />
        <Footer />
        <Footer2 />
        <Routes>
          <Route path="/" element={<div />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;

