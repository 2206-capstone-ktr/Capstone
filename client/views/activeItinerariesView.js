import React from 'react';
import { connect } from 'react-redux';

export const activeItinerariesView = (props) => {
  const { auth } = props;

  const tempItinOne = {
    name: 'Vacation',
    city: 'Los Angeles',
    startDate: '2022-09-29',
    endDate: '2022-10-02',
  };

  const tempItinTwo = {
    name: 'Island Hopping',
    city: 'Honolulu',
    description: `Island hopping between Hawai'i, O'Ahu, Maui, and Kauai`,
    startDate: '2022-11-06',
    endDate: '2022-11-13',
  };

  return (
    <div>
      <div className='flex justify-center'>
        <button className='btn btn-blue'>Create an Itinerary</button>
      </div>
      <div>
        <h1>Card</h1>
      </div>
    </div>
  );
};

const mapState = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapState)(activeItinerariesView);
