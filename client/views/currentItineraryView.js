import React from 'react';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CssBaseline, Grid } from '@material-ui/core';
import CurrentEventCard from '../components/CurrentEventCard';

import ItinMap from '../components/Map/ItineraryMap';

export const currentItineraryView = (props) => {
  const itinerary = useSelector((state) => state.singleItinerary);

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

  const [coordinates, setCoordinates] = useState({
    lat: 41.8826,
    lng: 87.6226,
  });
  const [bounds, setBounds] = useState({});

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
        console.log(coordinates, 'This is  center');
      }
    );
  }, []);

  let [num, setNum] = useState(1);
  let [cur, setCur] = useState(1);

  const days = [
    { day: num },
    { day: num + 1 },
    { day: num + 2 },
    { day: num + 3 },
  ];
  function Next() {
    setNum(++num);
  }
  function back() {
    num > 1 && setNum(--num);
  }

  return (
    <div className='flex bg-white rounded-lg font-[Poppins]'>
      <div>
        <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
          {itinerary.name}
        </h5>
        <br></br>
        <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
          {itinerary.startDate} to {itinerary.endDate}
        </p>
        <br></br>

        <div className='flex justify-center'>
          Days :
          <button
            onClick={back}
            className='h-12 border-2 border-r-0 border-indigo-600
                px-4 rounded-l-lg hover:bg-indigo-600 hover:text-white'
          >
            <svg className='w-4 h-4 fill-current' viewBox='0 0 20 20'>
              <path
                d='M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z'
                clipRule='evenodd'
                fillRule='evenodd'
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
            <svg className='w-4 h-4 fill-current' viewBox='0 0 20 20'>
              <path
                d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                clipRule='evenodd'
                fillRule='evenodd'
              ></path>
            </svg>
          </button>
        </div>
        {events?.map((event) => (
          <CurrentEventCard key={event.id} event={event} />
        ))}
      </div>
      <CssBaseline />
      <Grid container spacing={3} style={{ width: '115%' }}>
        <Grid item xs={12} md={4}></Grid>
        <Grid item xs={12} md={8}>
          <ItinMap
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default currentItineraryView;
