import React from 'react';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import { Paper, Typography } from '@material-ui/core';
import useStyles from './styles';

function ItinMapMarker() {
  const classes = useStyles();
  return (
    <div className={classes.markerContainer}>
      <LocationOnOutlinedIcon color='primary' fontSize='large' />
    </div>
  );
}

export default ItinMapMarker;
