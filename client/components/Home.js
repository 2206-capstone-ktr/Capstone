import React from 'react';
import { connect } from 'react-redux';
import SingleItinerary from './SingleItinerary';

/**
 * COMPONENT
 */
export const Home = (props) => {
  const { user } = props;
  console.log(user);

  return (
    <>
      <div>
        <h3>Welcome, {user.firstName}</h3>
      </div>
      <SingleItinerary user={user} />
    </>
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
