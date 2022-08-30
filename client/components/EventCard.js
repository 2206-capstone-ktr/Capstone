import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const EventCard = (props) => {
  const dispatch = useDispatch();

  return (
    <div className='border-t-0 border-r-2 border-l-2 border-b-2 my-1 grid grid-cols-12 bg-white filter drop-shadow-md'>
      <div className='col-span-2'>
        <img src={props.imageUrl} className='h-full w-full object-cover' />
      </div>
      <div className='col-span-10 mx-3 p-1'>
        <div className='flex justify-between'>
          <p className='text-xs font-bold'>{props.name}</p>
        </div>
        <p className='text-xs'>{props.location}</p>
        {props.website ? (
          <div>
            <span className='text-xs'>{props.website}</span>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default EventCard;
