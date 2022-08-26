import React from 'react';
import GoogleMapReact from 'google-map-react';

import useStyles from './styles';

const Map = () => {
  const coordinates = { lat: 41.7, lng: 87 };

  return (
    <div className='h-100 w-100'>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyBhAB7cTN69-Jv-oqtB9fn67SHoVKgqtn8' }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={''}
        //onChange={''}
        // onChildClick={''}
      ></GoogleMapReact>
    </div>
  );
};

export default Map;

const makeStyles = () => ({
  paper: {
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100px',
  },
  mapContainer: {
    height: '85vh',
    width: '100%',
  },
  markerContainer: {
    position: 'absolute',
    transform: 'translate(-50%, -50%)',
    zIndex: 1,
    '&:hover': { zIndex: 2 },
  },
  pointer: {
    cursor: 'pointer',
  },
});
