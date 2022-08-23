import React from 'react';
import { connect } from 'react-redux';
import CurrentEventCard from '../components/CurrentEventCard';

export const currentItinerary = (props) => {
  const { auth } = props;
  const itins = [
    {
      id: 1,
      name: 'Vacation',
      city: 'Los Angeles',
      description: `My vacation in LA`,
      startDate: '2022-09-29',
      endDate: '2022-10-02',
    },
    {
      id: 2,
      name: 'Island Hopping',
      city: 'Honolulu',
      description: `Island hopping between Hawai'i, O'Ahu, Maui, and Kauai`,
      startDate: '2022-11-06',
      endDate: '2022-11-13',
    },
  ];
  const days = [1, 2, 3, 4];
  const events = [
    {
      id: 1,
      name: 'Surfing',
    },
    {
      id: 2,
      name: 'Eating pizza',
    },
    {
      id: 3,
      name: 'Taking tour bus',
    },
  ];

  return (
    <div>
      <div>{itins[0].name}</div>
      <br></br>
      <div>
        {itins[0].startDate} to {itins[0].endDate}
      </div>
      <br></br>
      <div className='flex justify-center'>
        Days :
        {days.map((day) => {
          return <button key={day}>{day}</button>;
        })}
      </div>
      <div className='flex justify-center flex-col'>
        {events.map((event) => (
          <CurrentEventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

const mapState = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapState)(currentItinerary);
