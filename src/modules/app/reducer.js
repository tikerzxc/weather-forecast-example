import { createReducer } from 'redux-create-reducer';

import { SET_GEO_DATA, SET_GEO_DATA_ERROR, FETCH_DATA_PENDING, FETCH_DATA_SUCCESS, FETCH_DATA_ERROR } from './constants';

export const initialState = {
  geoData: null,
  data: null,
  errors: null,
  isLoading: false
};

export default createReducer(initialState, {
  [SET_GEO_DATA]: (state, { payload }) => ({
    ...state,
    geoData: payload 
  }),
  [SET_GEO_DATA_ERROR]: (state, { payload }) => ({
    ...state,
    errors: payload, 
  }),
  [FETCH_DATA_PENDING]: state => ({
    ...state,
    isLoading: true 
  }),
  [FETCH_DATA_SUCCESS]: (state, { payload }) => ({
    ...state,
    data: payload,
    isLoading: false
  }),
  [FETCH_DATA_ERROR]: (state, { payload }) => ({
    ...state,
    errors: payload,
    isLoading: false
  }),
});
