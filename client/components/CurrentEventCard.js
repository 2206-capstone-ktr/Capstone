import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import deleteEventThunk from '../store/itinerary';

function CurrentEventCard(props) {
  const event = props.event;
  const dispatch = useDispatch();
  const handleClick = async (itineraryId, eventId) => {
    try {
      dispatch(deleteEventThunk(itineraryId, eventId));
      alert('Itinerary deleted!');
      window.location.reload(false);
    } catch {
      alert('oops something went wrong');
    }
  };

  return (
    <a
      href='#'
      key={event.id}
      className='flex flex-col items-center m-5 bg-white rounded-lg border shadow-lg md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700'
    >
      <img
        className='object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg'
        src='favicon.ico'
        alt=''
      />
      <div className='flex flex-col justify-between p-4 leading-normal'>
        <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
          {event.name}
        </h5>
        <p>{event.type}</p>
        <button className='btn btn-blue' onClick={handleClick}>
          Delete
        </button>
      </div>
    </a>
  );
}

export default CurrentEventCard;
