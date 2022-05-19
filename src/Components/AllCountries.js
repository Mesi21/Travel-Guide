import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Country from './Country';
import { getCountriesList } from '../Redux/countries/countries';
import store from '../Redux/configureStore';
import '../Styles/AllCountries.css';

const AllCountries = () => {
  let countries = [];
  const [filteredCountries, setFilteredCountries] = useState([]);
  const dispatchAction = useDispatch();

  useEffect(() => {
    dispatchAction(getCountriesList());
    countries = store.getState().countriesReducer;
    setFilteredCountries(countries);
  }, []);

  const handleChange = (ev) => {
    ev.preventDefault();
    const data = ev.target.value;
    countries = store.getState().countriesReducer;
    const newList = countries.filter((c) => c.sub.includes(data));
    setFilteredCountries(newList);
  };

  return (
    <div className="countriesContainer">
      <div className="filter flex-row">
        Filter countries by region:
        <input type="text" placeholder="Filter" onChange={handleChange} />
      </div>
      <div className="cards">
        {filteredCountries.map((c) => (
          <>
            <div key={c.id} className="card">
              <Country
                id={c.id}
                name={c.name}
                region={c.region}
                lang={c.lang}
                sub={c.sub}
                flag={c.flag}
              />
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default AllCountries;
