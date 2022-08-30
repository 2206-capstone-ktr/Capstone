import React, { useState } from 'react';
import { Autocomplete } from '@react-google-maps/api';
import { useSelector, useDispatch } from 'react-redux';
import Rating from '@material-ui/lab/Rating';
import useStyles from './styles';
import Map from '../Map/Map';
import List from '../List/List';
import Holdinginfo from '../../holdinginfo';

const Search = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [places, setPlaces] = useState([]);

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
        <List places={places} />
      </div>
      <div>
        <Holdinginfo placesState={setPlaces} />
      </div>
    </div>
  );
};

export default Search;
