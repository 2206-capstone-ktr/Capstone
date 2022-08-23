import React from 'react';
import { connect } from 'react-redux';
// import Itineraries from './Iteneraries/Itineraries';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchItineraries } from '../store/Itinerary';

/**
 * COMPONENT
 */
export const Home = (props) => {
  const { user } = props;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchItineraries(user.id));
  }, []);

  return (
    <div>
      <h1>Welcome, {user.firstName}</h1>
    </div>
  );
};

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    user: state.auth,
  };
};

export default connect(mapState)(Home);
