import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import { Box, Grid, List, ListItem, ListItemText, Typography } from '@material-ui/core';

import WithLoader from '../../hocs/WithLoader';

import useStyles from './styles';
import { resultShape } from './shapes';

const MainContent = ({ data }) => {
  const classes = useStyles();

  const renderItems = ({ daily: { data } }) => (
    data.map(({ time, summary }) => (
      <ListItem key={time}>
        <ListItemText
          primary={
            <Fragment>
              <Typography component="span" className={classes.dateHolder}>
                { moment.unix(time).format('DD/MM/YYYY') }
              </Typography>
              <Typography component="span" className={classes.summaryText}>
                { summary }
              </Typography>
            </Fragment>
          }
        />
      </ListItem>
    )
  ));

  return (
    <Grid container className={classes.contentWrap}>
      <Grid item>
        <Typography className={classes.heading}>
          Current TimeZone: {data.timezone}
        </Typography>
        <Box boxShadow={10} my={2} p={2}>
          <List>
            { renderItems(data) }
          </List>
        </Box>
      </Grid>  
    </Grid>
  );
};

MainContent.propTypes = {
  data: PropTypes.shape(resultShape).isRequired
}

export default WithLoader(MainContent);