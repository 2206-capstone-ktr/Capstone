import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteEventThunk } from '../store/itinerary';
import toast from 'react-hot-toast';

function CurrentEventCard(props) {
  const event = props.event;
  const dispatch = useDispatch();
  const itinerary = useSelector((state) => state.singleItinerary);

  const handleClick = () => {
    try {
      dispatch(deleteEventThunk(itinerary.id, event.id));
      // alert('Event deleted successfully!');
      toast.success('Successfully deleted!');
    } catch {
      alert('oops something went wrong');
    }
  };

  return (
    <div
      key={event.id}
      className='flex flex-col items-center m-5 bg-gray-100 rounded-lg border shadow-lg md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700'
    >
      <img
        className='object-cover w-full h-200 rounded-t-xl md:h-auto xl:w-48 xl:rounded-none xl:rounded-l-lg'
        src={event.imageUrl}
        alt=''
      />
      <div className='flex flex-col justify-between p-4 leading-normal'>
        <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
          {event.name}
        </h5>
        <h6 className=' text-2lg font-medium  text-gray-900 dark:text-white'>
          {event.address}
        </h6>
        <br></br>
        <h6 className=' text-2lg font-medium  text-gray-900 dark:text-white'>
          Phone: {event.phone}
        </h6>
        <button className='btn btn-blue w-36' onClick={handleClick}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default CurrentEventCard;
