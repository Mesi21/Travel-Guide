import React from 'react';
import { useSelector } from 'react-redux';
import Country from './Country';

const AllCountries = () => {
  const countries = useSelector((state) => state.countriesReducer);

  return (
    <div className="countriesContainer">
      <div>
        Filter countries by region:
        <input type="text" placeholder="Filter" />
      </div>
      <div className="cards">
        {countries.map((c) => (
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
