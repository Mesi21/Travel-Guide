import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Details from './Pages/Details';
import { getCountriesList } from './Redux/countries/countries';

const App = () => {
  const dispatchAction = useDispatch();
  dispatchAction(getCountriesList());
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/details/:name" element={<Details />} />
      </Routes>
    </>
  );
};

export default App;
