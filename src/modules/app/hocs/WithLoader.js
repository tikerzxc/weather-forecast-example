import React from 'react';
import { useSelector } from 'react-redux';

import { getLoading } from '../selectors';

import Spinner from '../components/loadingSpinner/LoadingSpinner';

const WithLoader = Component => props => {
  const isLoading = useSelector(getLoading);
  return (
    isLoading ? <Spinner /> : <Component {...props} />
  );
};

export default WithLoader;