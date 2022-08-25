import React, { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ActiveItinCard from '../components/ActiveItinCard';
import { fetchItineraries, deleteItineraryById } from '../store/itinerary';
import { fetchItinerary } from '../store/singleItinerary';
import { useHistory } from 'react-router';

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
  const handleClick = async (itineraryId) => {
    try {
      dispatch(deleteItineraryById(itineraryId));
      alert('Itinerary deleted!');
      window.location.reload(false);
    } catch {
      alert('oops something went wrong');
    }
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
          <ActiveItinCard
            key={itin.id}
            itin={itin}
            onClick={onClickHandler}
            deleteClick={handleClick}
          />
        ))}
      </div>
    </div>
  );
};

export default activeItinerariesView;
