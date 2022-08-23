import React from 'react';

import CurrentEventCard from '../components/CurrentEventCard';

export const currentItineraryView = (props) => {
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
      type: 'sport',
    },
    {
      id: 2,
      name: 'Eating pizza',
      type: 'eating',
    },
    {
      id: 3,
      name: 'Taking tour bus',
      type: 'views',
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
      {events?.map((event) => (
        <CurrentEventCard key={event.id} event={event} />
      ))}
    </div>
  );
};

export default currentItineraryView;
