import React, { useState, useEffect } from 'react';
import { CssBaseline, Grid } from '@material-ui/core';
import { getPlacesData } from '../server/api/googlemaps';
import List from './components/List/List';
import Map from './components/Map/Map';
import Navbar from './components/Navbar';
import PlaceDetails from './components/PlaceDetails/PlaceDetails';
import Rating from '@material-ui/lab/Rating';

const Holdinginfo = ({ placesState }) => {
  const [places, setPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState({});
  const [childClick, setChildClicked] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  useEffect(() => {
    getPlacesData(bounds.sw, bounds.ne).then((data) => {
      setPlaces(data);
      placesState(data);
    });
  }, [coordinates, bounds]);
  return (
    <div>
      {/* <List places={places} /> */}
      <CssBaseline />;
      <Grid container spacing={3} style={{ width: '100%' }}>
        <Grid item xs={12} md={4}></Grid>
        <Grid item xs={12} md={8}>
          <Map
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
            places={places}
            setChildClicked={setChildClicked}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Holdinginfo;
