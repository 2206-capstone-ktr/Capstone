import React from 'react';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CssBaseline, Grid } from '@material-ui/core';
import CurrentEventCard from '../components/CurrentEventCard';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import useStyles from './styles';
import ItinMap from '../components/Map/ItineraryMap';
import { ContactsOutlined } from '@material-ui/icons';

export const currentItineraryView = (props) => {
  const classes = useStyles();
  const itinerary = useSelector((state) => state.singleItinerary);

  const [coordinates, setCoordinates] = useState({
    lat: 41.8826,
    lng: 87.6226,
  });
  const [bounds, setBounds] = useState({});

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  let [num, setNum] = useState(1);
  let [cur, setCur] = useState(1);

  let days = [];
  for (let i = 1; i <= itinerary.days; i++) {
    days.push({ day: i });
  }

  function Next() {
    setNum(++num);
  }
  function back() {
    num > 1 && setNum(--num);
  }

  // Drag and Drop Functionality starts here

  // const itinevents = itinerary.events; // NEED to make a deep copy
  // const itinevents = [...itinerary.events];

  useEffect(() => {
    if (itinerary.events) updateEvents([...itinerary.events]);
  }, [itinerary]);

  const [itineraryEvents, updateEvents] = useState([]);
  console.log('ItineraryEvent Array', itineraryEvents);

  function handleOnDragEnd(result) {
    if (!result.destination) return;
    console.log('Source', result.source);
    console.log('Destination', result.destination);
    updateEvents((oldArray) => {
      let items = Array.from(oldArray);
      let [reorderedItem] = items.splice(result.source.index, 1);
      items.splice(result.destination.index, 0, reorderedItem);
      return items;
    });
  }

  return (
    <div className="flex bg-[url('https://travellersworldwide.com/wp-content/uploads/elementor/thumbs/shutterstock_623111885-1-scaled-phifxb7av8bl2lrxdes1syk43v9acwtvrveysd1ouo.jpg.webp')] font-[Poppins]">
      <Grid container>
        <Grid item xs={6}>
          <div className='px-5 bg-blue-100'>
            <div className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
              {itinerary.name}
            </div>
            <br></br>
            <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
              {itinerary.startDate} to {itinerary.endDate}
            </p>
            <br></br>
            <div className='flex justify-center'>
              <span className='pr-5'>Days:</span>
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
            <div className='flex bg-red-200 rounded-lg font-[Poppins]'>
              <DragDropContext onDragEnd={handleOnDragEnd}>
                <Droppable droppableId='events'>
                  {(provided) => (
                    <ul
                      className='events'
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                    >
                      {itineraryEvents?.map((event, index) => {
                        return (
                          <Draggable
                            key={event.id}
                            draggableId={String(event.id)}
                            index={index}
                          >
                            {(provided) => (
                              <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                              >
                                <CurrentEventCard
                                  key={event.id}
                                  event={event}
                                />
                              </div>
                            )}
                          </Draggable>
                        );
                      })}
                      {provided.placeholder}
                    </ul>
                  )}
                </Droppable>
              </DragDropContext>
            </div>
          </div>
        </Grid>
        <Grid item xs={3}>
          <ItinMap
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
            itinerary={itinerary}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default currentItineraryView;
