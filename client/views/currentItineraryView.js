import React from 'react';
import { useState } from 'react';

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
  // const days = [1, 2, 3, 4];
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

  let [num, setNum] = useState(1);
  let [cur, setCur] = useState(1);

  const days = [
    { day: num },
    { day: num + 1 },
    { day: num + 2 },
    { day: num + 3 },
  ];
  function Next() {
    num > days[3] && setNum(++num);
  }
  function back() {
    num > 1 && setNum(--num);
  }

  return (
    <div className='flex bg-white rounded-lg font-[Poppins]'>
      <div>
        <div>{itins[0].name}</div>
        <br></br>
        <div>
          {itins[0].startDate} to {itins[0].endDate}
        </div>
        <br></br>
        <div className='flex justify-center'>
          Days :
          <button
            onClick={back}
            className='h-12 border-2 border-r-0 border-indigo-600
                px-4 rounded-l-lg hover:bg-indigo-600 hover:text-white'
          >
            <svg class='w-4 h-4 fill-current' viewBox='0 0 20 20'>
              <path
                d='M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z'
                clip-rule='evenodd'
                fill-rule='evenodd'
              ></path>
            </svg>
          </button>
          {days.map((pg, i) => (
            <button
              key={i}
              onClick={() => setCur(pg.day)}
              className={`h-12 border-2 border-r-0 border-indigo-600
                w-12 ${cur === pg.day && 'bg-indigo-600 text-white'}`}
            >
              {pg.day}
            </button>
          ))}
          <button
            onClick={Next}
            className='h-12 border-2  border-indigo-600
                px-4 rounded-r-lg hover:bg-indigo-600 hover:text-white'
          >
            <svg class='w-4 h-4 fill-current' viewBox='0 0 20 20'>
              <path
                d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                clip-rule='evenodd'
                fill-rule='evenodd'
              ></path>
            </svg>
          </button>
          {/* {days.map((day) => {
            return (
              <button
                key={day}
                className='py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
              >
                {day}
              </button> */}
          {/* );
          })} */}
        </div>
        {events?.map((event) => (
          <CurrentEventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default currentItineraryView;
