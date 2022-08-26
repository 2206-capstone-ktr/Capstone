import React from 'react';
import { Autocomplete } from '@react-google-maps/api';
import { useSelector, useDispatch } from 'react-redux';
import useStyles from './styles';
import Map from '../Map/Map';

const Search = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Search for entertainment</h1>
      <label>Search</label>
      <input
        className='border border-gray-300 p-2 my-2 rounded-md focus:outline-none focus:ring-2 ring-blue-200 pac-target-input'
        type='text'
        placeholder='Example: Paris...'
        id='location-search'
        name='location-search'
        autoComplete='off'
      ></input>
      <div>
        <Map />
      </div>
    </div>
  );
};

export default Search;
