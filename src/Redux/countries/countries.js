const GET_COUNTRIES = 'GET_COUNTRIES';
const FILTER_COUNTRIES = 'FILTER_COUNTRIES';
const GET_COUNTRY = 'GET_COUNTRY';
const url = 'https://restcountries.com/v3.1/subregion/europe';

const stateInit = [];

export const getCountries = (payload) => ({
  type: GET_COUNTRIES,
  payload,
});

export const filterCountries = (payload) => ({
  type: FILTER_COUNTRIES,
  payload,
});

export const getCountry = (payload) => ({
  type: GET_COUNTRY,
  payload,
});

const countriesReducer = (state = stateInit, action) => {
  switch (action.type) {
    case GET_COUNTRIES:
      return action.payload;
    case FILTER_COUNTRIES:
      return state.filter((c) => c.sub.includes(action.payload));
    case GET_COUNTRY:
      return action.payload;
    default:
      return state;
  }
};

export const getData = (c) => async (dispatch) => {
  fetch(`${url}`)
    .then((response) => response.json())
    .then((data) => {
      const countryInfo = [];
      data.forEach((country) => {
        if (country.name.common === c) {
          countryInfo.push({
            name: country.name.common,
            region: country.region,
            lang: country.languages,
            sub: country.subregion,
            flag: country.flags.png,
            id: country.cca2,
            offName: country.name.official,
            capital: country.capital[0],
            unMember: country.unMember,
            area: country.area,
            pop: country.population,
            time: country.timezones[0],
          });
        }
        dispatch(getCountry(countryInfo));
      });
    })
    .catch((err) => err);
};

export const getCountriesList = () => async (dispatch) => {
  const countries = await fetch(`${url}`)
    .then((response) => response.json())
    .catch((err) => err);
  const countryInfo = [];
  countries.map((country) => countryInfo.push({
    name: country.name.common,
    region: country.region,
    lang: country.languages,
    sub: country.subregion,
    flag: country.flags.png,
    id: country.cca2,
  }));
  dispatch(getCountries(countryInfo));
};

export default countriesReducer;
