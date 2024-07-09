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
import ProductList from "./components/Products/ProductList";

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
      <Router>
        <StaticHomebar/>
        <CarouselImages />
        <ProductList />
        <SubHeader />
        <Footer />
        <Footer2 />
        <Routes>
          <Route path="/" element={<div />} />
        </Routes>
      </Router>

  );
}

export default App;

