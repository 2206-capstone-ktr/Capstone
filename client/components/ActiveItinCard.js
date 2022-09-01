import React from 'react';
import { Link } from 'react-router-dom';

function ActiveItinCard(props) {
  const itin = props.itin;

  return (
    <div className='flex flex-row'>
      <Link
        onClick={() => props.onClick(itin)}
        to={'/currentItinerary'}
        key={itin.id}
        className='flex flex-col flex-grow items-center m-5 bg-white rounded-lg border shadow-lg md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700'
      >
        <img
          className='object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg'
          src='favicon.ico'
          alt='vacation image'
        />
        <div className='flex flex-col justify-between p-4 leading-normal'>
          <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
            {itin.name}
          </h5>
          <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
            {itin.city}
          </p>
          <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
            {itin.description}
          </p>
          <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
            {itin.startDate} to {itin.endDate}
          </p>
        </div>
      </Link>
      <button
        className='btn btn-blue'
        onClick={() => props.deleteClick(itin.id)}
      >
        Delete
      </button>
    </div>
  );
}

export default ActiveItinCard;
