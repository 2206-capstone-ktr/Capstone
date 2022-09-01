import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import { useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';

import useStyles from './styles';

const ItinMap = ({
  setCoordinates,
  setBounds,
  coordinates,
  itinerary,
  setChildClicked,
}) => {
  const classes = useStyles();
  //   const mapMarker = { lat: 40.760851, lng: -73.964331 };
  const defCenter = {
    lat: 41.8826,
    lng: 87.6226,
  };
  console.log(itinerary, 'this ');
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
        {itinerary.events?.map((event, i) => (
          <div
            className={classes.markerContainer}
            lat={Number(event.latitude)}
            lng={Number(event.longitude)}
            key={i}
          >
            <LocationOnOutlinedIcon color='primary' fontSize='large' />
          </div>
        ))}
      </GoogleMapReact>
    </div>
  );
};

export default ItinMap;
