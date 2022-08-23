import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../store';

const Navbar = ({ handleClick, isLoggedIn, auth }) => (
  <div className='bg-gray-300 flex'>
    <Link to='/'>
      <img
        className='h-24'
        src='https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/kzwbqo3ipenftavyhgu9'
      />
    </Link>
    <nav className='nav'>
      {isLoggedIn ? (
        <div className='right'>
          <a>Hi, {auth.email} </a>
          <Link to='/home'>Home</Link>
          <Link to='/create'>Create Itinerary</Link>
          <a href='#' onClick={handleClick}>
            Logout
          </a>
        </div>
      ) : (
        <div>
          <Link to='/login'>Login</Link>
          <Link to='/signup'>Sign Up</Link>
        </div>
      )}
    </nav>
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
