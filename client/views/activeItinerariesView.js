import React, { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ActiveItinCard from '../components/ActiveItinCard';
import { fetchItineraries } from '../store/itinerary';
import { fetchItinerary } from '../store/singleItinerary';

export const activeItinerariesView = (props) => {
  const user = useSelector((state) => state.auth);
  const itineraries = useSelector((state) => state.itinerary);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchItineraries(user.id));
  }, []);

  const onClickHandler = async (itinerary) => {
    dispatch(fetchItinerary(itinerary.id));
  };
  return (
    <div>
      <div className='flex justify-center'>
        <Link to={'/create'}>
          <button className='btn btn-blue'>Create an Itinerary</button>
        </Link>
      </div>
      <div className='flex justify-center flex-col'>
        {itineraries?.map((itin) => (
          <ActiveItinCard key={itin.id} itin={itin} onClick={onClickHandler} />
        ))}
      </div>
    </div>
  );
};

export default activeItinerariesView;
