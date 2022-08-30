import React, { useState, useEffect } from 'react';
import { Autocomplete } from '@react-google-maps/api';
import { useSelector, useDispatch } from 'react-redux';
import Rating from '@material-ui/lab/Rating';
import useStyles from './styles';
import List from '../List/List';
// import Holdinginfo from '../../holdinginfo';
import { getPlacesData } from '../../../server/api/googlemaps';
import { CssBaseline, Grid } from '@material-ui/core';
import Map from '../Map/Map';

const Search = () => {
  const classes = useStyles();
  //const dispatch = useDispatch();
  const [places, setPlaces] = useState([]);
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const [childClicked, setChildClicked] = useState(null);
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [type, setType] = useState('restaurants');
  const [rating, setRating] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  useEffect(() => {
    const filteredPlaces = places.filter((place) => place.rating > rating);
    setFilteredPlaces(filteredPlaces);
  }, [rating]);

  useEffect(() => {
    setIsLoading(true);
    getPlacesData(type, bounds.sw, bounds.ne).then((data) => {
      setPlaces(data);
      setFilteredPlaces([]);
      setIsLoading(false);
    });
  }, [type, coordinates, bounds]);

  return (
    <div className={classes.gridContainer}>
      <div>
        <h1>Restaurants, Hotels & Attractions</h1>
        <label>Search</label>
        <input
          className='border border-gray-300 p-2 my-2 rounded-md focus:outline-none focus:ring-2 ring-blue-200 pac-target-input'
          type='text'
          placeholder='Example: Chicago'
          id='location-search'
          name='location-search'
          autoComplete='on'
        ></input>
        <List
          places={filteredPlaces.length ? filteredPlaces : places}
          childClicked={childClicked}
          isLoading={isLoading}
          type={type}
          setType={setType}
          rating={rating}
          setRating={setRating}
        />
      </div>
      <div>
        <CssBaseline />;
        <Grid container spacing={3} style={{ width: '100%' }}>
          <Grid item xs={12} md={4}></Grid>
          <Grid item xs={12} md={8}>
            <Map
              setCoordinates={setCoordinates}
              setBounds={setBounds}
              coordinates={coordinates}
              places={filteredPlaces.length ? filteredPlaces : places}
              setChildClicked={setChildClicked}
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
//======================
export default Search;
