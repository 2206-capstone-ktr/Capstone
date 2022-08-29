import React from 'react';
import GoogleMapReact from 'google-map-react';

import useStyles from './styles';

const Map = ({ setCoordinates, setBounds, coordinates }) => {
  const classes = useStyles();
  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyBhAB7cTN69-Jv-oqtB9fn67SHoVKgqtn8' }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={13}
        margin={[50, 50, 50, 50]}
        options={{ zoomControl: true }}
        onChange={(e) => {
          console.log('hi', e);
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        // onChildClick={''}
      ></GoogleMapReact>
    </div>
  );
};

export default Map;
