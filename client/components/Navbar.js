import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../store';

const Navbar = ({ handleClick, isLoggedIn, auth }) => (
  <div className='bg-gray-300 flex items-center space-x-5 justify-between px-5'>
    <Link to='/'>
      <img
        className='h-24 object-contain cursor-pointer'
        src='https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/kzwbqo3ipenftavyhgu9'
      />
    </Link>
    <div>
      {isLoggedIn ? (
        <div className='hidden md:inline-flex items-center space-x-5 pr-5'>
          <a>Hi, {auth.email} </a>
          <Link to='/home'>Home</Link>
          <Link to='/search'>Search</Link>
          <Link to='/create'>Create Itinerary</Link>
          <Link to='/activeitineraries'>Active Itineraries</Link>
          <a href='#' onClick={handleClick}>
            Logout
          </a>
        </div>
      ) : (
        <div className='hidden md:inline-flex items-center space-x-5'>
          <Link to='/login'>Login</Link>
          <Link to='/signup'>Sign Up</Link>
        </div>
      )}
    </div>
  </div>
);

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    isLoggedIn: !!state.auth.id,
    auth: state.auth,
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleClick() {
      dispatch(logout());
    },
  };
};

export default connect(mapState, mapDispatch)(Navbar);
