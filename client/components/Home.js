import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

/**
 * COMPONENT
 */
export const Home = (props) => {
  const { auth } = props;

  return (
    <div>
      <h3 className='text-3xl font-bold m-5'>Welcome, {auth.firstName}</h3>

      <div className='flex justify-between items-center bg-blue-300 border-y border-black py-10 lg:py-0'>
        <div className='px-10 space-y-5'>
          <h1 className='text-6xl max-w-xl font-serif'>
            <span className='underline decoration-black decoration-4'>
              Planr
            </span>{' '}
            This is some placeholder text here
          </h1>
          <h2>
            This is a longer bit of placeholder text. Placeholder placeholder
            placeholder placeholder
          </h2>
        </div>
        <img
          className='hidden md:inline-flex h-32 lg:h-full'
          src='cal-icon.ico'
          alt=''
        />
      </div>
      <Link to={'/activeitineraries'}>
        <button className='btn btn-blue' type='submit'>
          Current Itineraries
        </button>
      </Link>
      <Link to={'/create'}>
        <button className='btn btn-blue' type='submit'>
          Create an Itinerary
        </button>
      </Link>
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
