import React, { useState } from "react";
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Header from "./components/Head/Header";
import Header2 from "./components/Head/Header2";
import CarouselImages from './components/Carousel/CarouselImages';
import ProductList from "./components/Products/ProductList";
import Whysection from "./components/Head/Whysection";
import Footer from './components/Foot/Footer';
import Footer2 from './components/Foot/Footer2';
import Footer3 from './components/Foot/Footer3';
import Checkout from "./components/Checkingout/Checkout";
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
      <Router>
        <Header />
        <Header2 />
        <Routes>
          <Route path="/" element={
            <>
              <CarouselImages />
              <ProductList />
              <Whysection />
              <Footer />
              <Footer2 /> 
              <Footer3 />
            </>
          } />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/ProductList" element={<ProductList/>} />
        </Routes>
      </Router>
  );
}

export default App;

