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
