import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { FaRegArrowAltCircleLeft } from 'react-icons/fa';
import { getData } from '../Redux/countries/countries';
import '../Styles/Details.css';

const Details = () => {
  const dispatchAction = useDispatch();
  const { name } = useParams();
  const selectedCountry = useSelector((state) => state.countriesReducer);

  useEffect(() => {
    dispatchAction(getData(name));
  }, [name]);

  const navigate = useNavigate();
  const handleClick = () => navigate('/home');
  return (
    <div className="detailsPage flex-column">
      <div className="back"><FaRegArrowAltCircleLeft onClick={handleClick} /></div>
      <div className="allStats">
        <div className="mainInfo">
          <h1>{selectedCountry[0].name}</h1>
          <img src={selectedCountry[0].flag} alt="flag" />
        </div>
        <ul>
          <li className="stats flex-row">
            <p>
              Capital city:
            </p>
            <p>
              {selectedCountry[0].capital}
            </p>
          </li>
          <li className="stats flex-row">
            <p>Subregion:</p>
            <p>{selectedCountry[0].sub}</p>
          </li>
          <li className="stats flex-row">
            <p>Official name:</p>
            <p>{selectedCountry[0].offName}</p>
          </li>
          <li className="stats flex-row">
            <p>Spoken languages:</p>
            <p>
              {Object.entries(selectedCountry[0].lang).map(([k, l]) => (
                <small key={k}>
                  {l}
                  {' '}
                </small>
              ))}
            </p>
          </li>
          <li className="stats flex-row">
            <p>Area:</p>
            <p>{selectedCountry[0].area}</p>
          </li>
          {(selectedCountry[0].unMember)
            ? <li className="stats flex-row"><small>UN Member</small></li> : <li className="stats"><small>Not UN Member</small></li>}
          <li className="stats flex-row">
            <p>Population:</p>
            <p>{selectedCountry[0].pop}</p>
          </li>
          <li className="stats flex-row">
            <p>Time-zones:</p>
            <p>{selectedCountry[0].time}</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Details;
