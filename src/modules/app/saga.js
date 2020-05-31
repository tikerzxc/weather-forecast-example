import axios from 'axios';
import { put, call, select, takeEvery } from 'redux-saga/effects';

import { getGeoData } from './selectors';
import { fetchDataSuccess, fetchDataError } from './actions';

import { SET_GEO_DATA_ERROR, FETCH_DATA_PENDING } from './constants';
import { PROXY_URL, DARKSKY_BASE_URL, DARKSKY_API_KEY } from '../../config/endpoints';

function* handleFetchData() {
  const { latitude, longitude } = yield select(getGeoData);

  try {
    const { data } = yield axios.get(`${PROXY_URL}/${DARKSKY_BASE_URL}/${DARKSKY_API_KEY}/${latitude},${longitude}`);
    yield put(fetchDataSuccess(data));
  } catch (error) {
    yield put(fetchDataError(error));
  }
}

function* handleSetGeoDataError() {
  yield call(alert, 'Geolocation not enabled');
}

export function* appSaga() {
  yield takeEvery(FETCH_DATA_PENDING, handleFetchData);
  yield takeEvery(SET_GEO_DATA_ERROR, handleSetGeoDataError);
}
