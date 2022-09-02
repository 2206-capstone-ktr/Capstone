import React from 'react';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import { Paper, Typography } from '@material-ui/core';
import useStyles from './styles';

function MapMarker({ place, isDesktop }) {
  const classes = useStyles();
  return (
    <div className={classes.markerContainer}>
      {isDesktop ? (
        <LocationOnOutlinedIcon color='primary' fontSize='large' />
      ) : (
        <Paper elevation={3} className={classes.paper}>
          <Typography
            className={classes.typography}
            variant='subtitle2'
            gutterBottom
          >
            {place.name}
          </Typography>
          <img
            className={classes.pointer}
            src={
              place.photo
                ? place.photo.images.large.url
                : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYxlUZGKnAXRHPw5oFUdBw_kRzsAg8T9oLvw&usqp=CAU'
            }
            alt={place.name}
          />
          <Rating
            name='read-only'
            size='small'
            value={Number(place.rating)}
            readOnly
          />
        </Paper>
      )}
    </div>
  );
}

export default MapMarker;
