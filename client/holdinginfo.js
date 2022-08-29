import React, { useState, useEffect } from 'react';
import { CssBaseline, Grid } from '@material-ui/core';
import { getPlacesData } from '../server/api/googlemaps';
import List from './components/List/List';
import Map from './components/Map/Map';
import Navbar from './components/Navbar';
import PlaceDetails from './components/PlaceDetails/PlaceDetails';

const [places, setPlaces] = useState([]);
const [coordinates, setCoordinates] = useState({});
const [bounds, setBounds] = useState(null);

useEffect(() => {
  getPlacesData().then((data) => {
    console.log(data);
    setPlaces(data);
  });
}, []);

<CssBaseline />;
{
  /* <Header /> */
}
<Grid container spacing={3} style={{ width: '100%' }}>
  <Grid item xs={12} md={4}>
    <List />
  </Grid>
  <Grid item xs={12} md={8}>
    <Map
      setCoordinates={setCoordinates}
      setBounds={setBounds}
      coordinates={coordinates}
    />
  </Grid>
</Grid>;


////--------------MAP--------------
onChange={(e) => {
    console.log('hi', e);
    setCoordinates({ lat: e.center.lat, lng: e.center.lng });
  }}
