import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

/**
 * COMPONENT
 */
export const Home = (props) => {
  const { auth } = props;

  return (
    <div
      className='w-full h-full bg-no-repeat bg-cover bg-center bg-fixed '
      style={{
        backgroundImage: `url('https://media.istockphoto.com/photos/young-man-arms-outstretched-by-the-sea-at-sunrise-enjoying-freedom-picture-id1285301614?b=1&k=20&m=1285301614&s=612x612&w=0&h=oL04ACGYXP5cepM8NLZIyJaeUjuYoXYIrTT-Ej2jTAQ=')`,
      }}
    >
      <h3 className='text-3xl font-bold  text-yellow-600'>
        Welcome, {auth.firstName}
      </h3>

      <div className='flex justify-around my-16'>
        <Link to={'/activeitineraries'}>
          <button className='btn btn-blue w-96 h-36' type='submit'>
            Current Itineraries
          </button>
        </Link>
        <Link to={'/create'}>
          <button className='btn btn-blue w-96 h-36' type='submit'>
            Create an Itinerary
          </button>
        </Link>
      </div>
      <div>
        <div className='text-3xl text-center font-bold m-5  text-white'>
          <span className=' bg-blue-500 m-5 py-2 px-4'>
            Top Trending Cities
          </span>
        </div>
        <div className='flex justify-around items-end pb-12'>
          <div className='relative'>
            <img
              src='https://thumbs.dreamstime.com/b/chicago-skyline-28481891.jpg'
              className='relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0'
            />
            <h2 className='absolute text-3xl text-white bottom-4 left-1/2 -translate-x-1/2'>
              {' '}
              Chicago
            </h2>
          </div>
          <br></br>
          <div className='relative'>
            <img
              src='https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&w=1000&q=80'
              className='relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0'
            />
            <h2 className='absolute text-3xl text-white bottom-4 left-1/2 -translate-x-1/2'>
              {' '}
              New York
            </h2>
          </div>
          <br></br>
          <div className='relative'>
            <img
              src='https://images.squarespace-cdn.com/content/v1/57798f63d1758e240175005a/1467698973389-3RCMAEKEL98PLVAQJ18P/4625659627_8eb36ecb63_o.jpg?format=2500w'
              className='relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0'
            />
            <h2 className='absolute text-3xl text-white bottom-4 left-1/2 -translate-x-1/2'>
              {' '}
              Seattle
            </h2>
          </div>
        </div>
      </div>
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
