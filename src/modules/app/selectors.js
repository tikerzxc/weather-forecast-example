import { createSelector } from 'reselect';

export const getMain = state => state.main;

export const getLoading = createSelector([getMain], ({ isLoading }) => isLoading);

export const getGeoData = createSelector([getMain],
  ({ geoData }) => geoData);

export const getForecastData = createSelector([getMain],
  ({ data }) => data);
