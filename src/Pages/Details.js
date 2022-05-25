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
        <h1>{selectedCountry[0].name}</h1>
        <img src={selectedCountry[0].flag} alt="flag" />
        <ul>
          <li className="stats">
            <em>
              Capital city:
              {' '}
              {selectedCountry[0].capital}
            </em>
          </li>
          <li className="stats">
            <small>
              Subregion:
              {' '}
              <em>{selectedCountry[0].sub}</em>
            </small>
          </li>
          <li className="stats">
            Official name:
            {' '}
            {selectedCountry[0].offName}
          </li>
          <li className="stats">
            <span>
              Spoken languages:
              {' '}
              {Object.entries(selectedCountry[0].lang).map(([k, l]) => (
                <small key={k}>
                  {l}
                  {' '}
                </small>
              ))}
            </span>
          </li>
          <li className="stats">
            Area:
            {' '}
            {selectedCountry[0].area}
          </li>
          {(selectedCountry[0].unMember)
            ? <li className="stats"><small>UN Member</small></li> : <li className="stats"><small>Not UN Member</small></li>}
          <li className="stats">
            Population:
            {' '}
            {selectedCountry[0].pop}
          </li>
          <li className="stats">
            Time-zones:
            {' '}
            {selectedCountry[0].time}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Details;
