import React from 'react';
import Map from './Map/Map';
function CurrentItinCard(props) {
  const itin = props.itin;

  return (
    <div key={itin.id}>
      <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
        {itin.name}
      </h5>
      <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
        {itin.startDate} to {itin.endDate}
      </p>
    </div>
  );
}

export default CurrentItinCard;
