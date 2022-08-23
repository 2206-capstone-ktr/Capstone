import React from 'react';
import { connect } from 'react-redux';
// import Itineraries from './Iteneraries/Itineraries';

/**
 * COMPONENT
 */
export const Home = (props) => {
  const { user } = props;

  return (
    <div>
      <h3 className='text-3xl font-bold'>Welcome, {auth.firstName}</h3>
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
