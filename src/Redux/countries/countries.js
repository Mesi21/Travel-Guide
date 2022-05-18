const GET_COUNTRIES = 'GET-COUNTRIES';
const url = 'https://restcountries.com/v3.1/subregion/europe';

const stateInit = [];

export const getCountries = (payload) => ({
  type: GET_COUNTRIES,
  payload,
});

const countriesReducer = (state = stateInit, action) => {
  switch (action.type) {
    case GET_COUNTRIES:
      return action.payload;
    default:
      return state;
  }
};

export const getCountriesList = () => async (dispatch) => {
  const countries = await fetch(`${url}`)
    .then((response) => response.json())
    .catch((err) => console.error(err));
  const countryInfo = [];
  countries.map((country) => countryInfo.push({
    name: country.name.common,
    region: country.region,
    lang: country.languages,
    sub: country.subregion,
    flag: country.flags.png,
    id: country.cca2,
    offName: country.name.official,
    capital: country.capital[0],
    borders: country.borders,
    area: country.area,
    pop: country.population,
    time: country.timezones[0],
  }));
  dispatch(getCountries(countryInfo));
};

export default countriesReducer;
