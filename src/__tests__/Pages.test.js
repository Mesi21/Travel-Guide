import React from 'react';
import { Provider } from 'react-redux';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import store from '../Redux/configureStore';
import { render } from '@testing-library/react';
import Home from '../Pages/Home';
import Details from '../Pages/Details';
import { getCountries, getCountry } from '../Redux/countries/countries';

describe('Test for Home and Details', () => {
  test('should render', () => {
    const homepage = render(
      <Provider store={store}>
        <Router>
          <Home />
        </Router>
      </Provider>,
    );
    expect(homepage).toMatchSnapshot();
  });

  it('should return an action with type GET_COUNTRIES', () => {
    const action = getCountries();
    expect(action.type).toBe('GET_COUNTRIES');
  });

   it('should be able to see the details pages', () => {
    const details = render(
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/details/:name" element={<Details />}/>
          </Routes>
        </Router>
      </Provider>,
    );
    expect(details).toMatchSnapshot();
  });

  it('should return an action with type GET_COUNTRY', () => {
    const action = getCountry();
    expect(action.type).toBe('GET_COUNTRY');
  });
});
