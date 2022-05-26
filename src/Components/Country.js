import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../Styles/Country.css';

const Country = ({
  id, name, lang, sub, flag,
}) => (
  <div id={id} className="countryDetails">
    <div className="headerInfo">
      <h1>{name}</h1>
      <p><em>{sub}</em></p>
      <Link to={`/details/${name}`}><img src={flag} alt="flag" /></Link>
    </div>
    <div className="spokenLangs flex-row">
      {Object.entries(lang).map(([k, l]) => (
        <div key={k} className="langs">
          <p><small><em>{l}</em></small></p>
        </div>
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
