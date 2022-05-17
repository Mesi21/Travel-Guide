const GET_COUNTRIES = './travel-guide/countries/GET_COUNTRIES';
const url = 'https://restcountries.com/v3.1/region/';

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
  const countries = await fetch(`${url}europe`)
    .then((resp) => resp.json());
  const countryInfo = [];
  countries.map((country) => countryInfo.push({
    name: country.name.common,
    region: country.region,
    lang: country.languages,
    sub: country.subregion,
    flag: country.flag,
  }));
  dispatch(getCountries(countryInfo));
};

export default countriesReducer;
