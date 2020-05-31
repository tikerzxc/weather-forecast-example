import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import has from 'lodash/has';

import {  Typography } from '@material-ui/core';

import { usePosition } from 'use-position';

import { setGeoData, setGeoDataError, fetchData } from '../../actions';
import { getForecastData } from '../../selectors';

import { Grid } from '@material-ui/core';

import MainContent from '../mainContent/MainContent';
import Logo from '../../shared/icons/Logo';

import useStyles from './styles';

const AppLayout = () => {
  const classes = useStyles();

  const geoData = usePosition();
  const dispatch = useDispatch();

  const forecastData = useSelector(getForecastData);

  useEffect(() => {
    const { error } = geoData;
    const hasCoords = has(geoData, 'latitude', 'longitude');
    const shouldFetchData = hasCoords && !forecastData;

    dispatch(setGeoData(geoData));

    if (shouldFetchData) {
      dispatch(fetchData());
    } else if (error) {
      dispatch(setGeoDataError(error))
    }
  }, [geoData]);

  return (
    <Grid container>
      <Grid item className={classes.headerContainer}>
        <Logo />
        <Typography component="h1" className={classes.heading}>
          WEATHER FORECAST
        </Typography>
      </Grid>  
     {forecastData && <MainContent data={forecastData} />}
    </Grid>
  );
};

export default AppLayout;