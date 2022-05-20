import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../Styles/Country.css';

const Country = ({
  id, name, lang, sub, flag,
}) => (
  <div id={id} className="countryDetails">
    <div className="headerInfo">
      <h1>{name}</h1>
      <Link to={`/details/${name}`}><img src={flag} alt="flag" /></Link>
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
  </div>
);

Country.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  lang: PropTypes.shape({
    key: PropTypes.string,
  }).isRequired,
  sub: PropTypes.string.isRequired,
  flag: PropTypes.string.isRequired,
};

export default Country;
