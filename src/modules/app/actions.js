import { SET_GEO_DATA, SET_GEO_DATA_ERROR, FETCH_DATA_PENDING,
  FETCH_DATA_SUCCESS, FETCH_DATA_ERROR } from './constants';

export const setGeoData = geoData => ({
  type: SET_GEO_DATA,
  payload: geoData
});

export const setGeoDataError = error => ({
  type: SET_GEO_DATA_ERROR,
  payload: error
});

export const fetchData = () => ({
  type: FETCH_DATA_PENDING
});

export const fetchDataSuccess = data => ({
  type: FETCH_DATA_SUCCESS,
  payload: data
});

export const fetchDataError = error => ({
  type: FETCH_DATA_ERROR,
  payload: error
});