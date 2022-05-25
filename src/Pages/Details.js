import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRotateBackward } from '@fortawesome/free-solid-svg-icons';
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
      <div><FontAwesomeIcon icon={faArrowRotateBackward} onClick={handleClick} /></div>
      <div>
        <ul>
          <li className="flex-row">
            <h1>{selectedCountry[0].name}</h1>
          </li>
          <li><h3>{selectedCountry[0].capital}</h3></li>
          <li id="flagBox"><img src={selectedCountry[0].flag} alt="flag" /></li>
          <li>
            <small>
              Subregion:
              {' '}
              <em>{selectedCountry[0].sub}</em>
            </small>
          </li>
          <li>
            Official name:
            {' '}
            {selectedCountry[0].offName}
          </li>
          <p>Spoken languages:</p>
          {Object.entries(selectedCountry[0].lang).map(([k, l]) => (
            <li key={k} className="langs">
              <small>{l}</small>
            </li>
          ))}
          <li>
            Area:
            {' '}
            {selectedCountry[0].area}
          </li>
          {(selectedCountry[0].unMember)
            ? <li><small>UN Member</small></li> : <li><small>Not UN Member</small></li>}
          <li>
            Population:
            {' '}
            {selectedCountry[0].pop}
          </li>
          <li>
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
