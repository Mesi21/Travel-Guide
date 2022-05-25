import React from 'react';
import { Routes, Route } from 'react-router-dom';
import store from './Redux/configureStore';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Details from './Pages/Details';
import { getCountriesList } from './Redux/countries/countries';
import Footer from './Components/Footer';

const App = () => {
  store.dispatch(getCountriesList());
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/details/:name" element={<Details />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
