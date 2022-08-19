import React from 'react';
import { connect } from 'react-redux';

/**
 * COMPONENT
 */
export const Home = (props) => {
  const { auth } = props;

  return (
    <div>
      <h3>Welcome, {auth.firstName}</h3>
    </div>
  );
};

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapState)(Home);
