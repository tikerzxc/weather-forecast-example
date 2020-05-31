import PropTypes from 'prop-types';

export const resultShape = {
  currently: PropTypes.object,
  daily: PropTypes.object,
  flags: PropTypes.object,
  hourly: PropTypes.object,
  latitude: PropTypes.number,
  longitude: PropTypes.number,
  offset: PropTypes.number
};