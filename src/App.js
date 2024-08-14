// import React, { useState } from "react";
// import './App.css';
// import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
// import Header from "./components/Head/Header";
// import Header2 from "./components/Head/Header2";
// import CarouselImages from './components/Carousel/CarouselImages';
// import ProductList from "./components/Products/ProductList";
// import Whysection from "./components/Head/Whysection";
// import Footer from './components/Foot/Footer';
// import Payment from './Paysection/Payment';
// import Footer2 from './components/Foot/Footer2';
// import Footer3 from './components/Foot/Footer3';
// import Checkout from "./components/Checkingout/Checkout";
// import { ThemeProvider, createTheme } from "@mui/material/styles";
// import { loadStripe } from "@stripe/stripe-js";
// import { Elements } from "@stripe/react-stripe-js";



// const promise = loadStripe(
//   "pk_test_51Nl6cTEHx6HMgKSKknwAcFkwRAbP2o2Omu51e9NBbkVAXwCIhb8EGSkwHFt63V8RBlmPwJq7OgQBieV2qN4RsSSa00ATE387f6"
// );

// function App() {
//   // state to manage the dark mode
//   const [toggleDarkMode, setToggleDarkMode] = useState(true);

//   // function to toggle the dark mode as true or false
//   // const toggleDarkTheme = () => {
//   //   setToggleDarkMode(!toggleDarkMode);
//   // };

//   // // applying the primary and secondary theme colors
//   // const darkTheme = createTheme({
//   //   palette: {
//   //     mode: toggleDarkMode ? 'dark' : 'light', // handle the dark mode state on toggle
//   //     primary: {
//   //       main: '#90caf9',
//   //     },
//   //     secondary: {
//   //       main: '#131052',
//   //     },
//   //   },
//   // });

//   return (
//       <Router>
//         <Header />
//         <Header2 />
//         <Routes>
//           <Route path="/" element={
//             <>
//               <CarouselImages />
//               <ProductList />
//               <Whysection />
//               <Footer />
//               <Footer2 /> 
//               <Footer3 />
//             </>
//           } />
//           <Route path="/checkout" element={<Checkout />} />
//           <Route path="/ProductList" element={<ProductList/>} />
//           <Route path="/payment" element={
//             <Elements stripe={promise}>
//               <Payment/> 
//             <Elements/>
//           } />
//         </Routes>
//       </Router>
//   );
// }

// export default App;

import React, { useState } from "react";
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Header from "./components/Head/Header";
import Header2 from "./components/Head/Header2";
import CarouselImages from './components/Carousel/CarouselImages';
import ProductList from "./components/Products/ProductList";
import Whysection from "./components/Head/Whysection";
import Footer from './components/Foot/Footer';
import Payment from './Paysection/Payment';
import Footer2 from './components/Foot/Footer2';
import Footer3 from './components/Foot/Footer3';
import Checkout from "./components/Checkingout/Checkout";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  "pk_test_51Nl6cTEHx6HMgKSKknwAcFkwRAbP2o2Omu51e9NBbkVAXwCIhb8EGSkwHFt63V8RBlmPwJq7OgQBieV2qN4RsSSa00ATE387f6"
);

function App() {
  const [toggleDarkMode, setToggleDarkMode] = useState(true);

  const toggleDarkTheme = () => {
    setToggleDarkMode(!toggleDarkMode);
  };

  const darkTheme = createTheme({
    palette: {
      mode: toggleDarkMode ? 'dark' : 'light',
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
          <Route path="/payment" element={
            <Elements stripe={stripePromise}>
              <Payment />
            </Elements>
          } />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
