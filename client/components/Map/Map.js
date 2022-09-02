import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';

import Rating from '@material-ui/lab/Rating';

import useStyles from './styles';
import MapMarker from './MapMarker';

const Map = ({
  setCoordinates,
  setBounds,
  coordinates,
  places,
  setChildClicked,
}) => {
  const classes = useStyles();
  const isDesktop = useMediaQuery('(min-width:600px)');
  const defCenter = {
    lat: 41.8826,
    lng: 87.6226,
  };

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyBhAB7cTN69-Jv-oqtB9fn67SHoVKgqtn8' }}
        defaultCenter={defCenter}
        center={coordinates}
        defaultZoom={15}
        margin={[50, 50, 50, 50]}
        options={{ zoomControl: true }}
        onChange={(e) => {
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={(child) => setChildClicked(child)}
      >
        {places?.map((place, i) => (
          <MapMarker
            lat={Number(place.latitude)}
            lng={Number(place.longitude)}
            key={i}
            place={place}
            isDesktop={isDesktop}
          />
        ))}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
