// import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCountries } from '../Redux/countries/countries';
// import { getCountriesList } from '../Redux/countries/countries';

const Details = () => {
  const dispatchAction = useDispatch();
  const name = useParams();
  useEffect(() => {
    dispatchAction(getCountriesList(name));
  })
  console.log(name, flag);
  return (
    <>
      <div className="headerInfo">
        <h1>{name}</h1>
        <img src={flag} alt="flag" />
      </div>
      <div>
        <div>
          <small>Subregion: </small>
          <small><em>{sub}</em></small>
        </div>
        <small>Spoken languages: </small>
        {Object.entries(lang).map(([k, l]) => (
          <span key={k} className="langs">
            <small>{l}</small>
          </span>
        ))}
      </div>
    </>
  );
};

export default Details;
