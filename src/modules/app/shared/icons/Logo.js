import React from 'react';
import Icon from '@material-ui/core/Icon';

import logo from "../../../../assets/svg/logo.svg";

const Logo = (props) => (
  <Icon {...props}>
    <img src={logo} alt="logo" title="logo" />
  </Icon>
);

export default Logo;