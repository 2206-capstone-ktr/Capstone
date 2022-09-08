import React from 'react';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CssBaseline, Grid } from '@material-ui/core';
import CurrentEventCard from '../components/CurrentEventCard';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import useStyles from './styles';
import ItinMap from '../components/Map/ItineraryMap';

export const currentItineraryView = (props) => {
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

  const dayMap = [];
  if (itinerary.days) {
    dayMap.length = itinerary.days;
  }
  for (let i = 0; i < dayMap.length; i++) {
    dayMap[i] = [];
  }

  itinerary.events &&
    itinerary.events.forEach((event) => {
      dayMap[event.itineraryEvent.day] = dayMap[event.itineraryEvent.day] || [];
      dayMap[event.itineraryEvent.day].push(event);
    });

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
    // droppableId = name of container column
    if (
      result.destination.droppableId === 'assignedTasks' &&
      result.source.droppableId === 'assignedTasks'
    ) {
      dayMap[cur].forEach((item) => {
        // Moving events position < updated position (Case 1: Drag down)
        if (
          dayMap[cur][result.source.index - 1].itineraryEvent.position <
          result.destination.index + 1
        ) {
          // item position < updated position and item position > starting position
          if (
            item.itineraryEvent.position <= result.destination.index &&
            item.itineraryEvent.position > result.source.index
          ) {
            // Subtract one from the items position
            item.itineraryEvent.position = item.itineraryEvent.position - 1;
            // else if item position >= updated position
          }
          // Moving events position < updated position (Case 2: Drag Up)
        } else if (
          dayMap[cur][result.source.index - 1].itineraryEvent.position >
          result.destination.index
        ) {
          // item position <= starting position and item position >= updated position
          if (
            item.itineraryEvent.position < result.source.index &&
            item.itineraryEvent.position >= result.destination.index
          ) {
            // item position = +1 its position
            item.itineraryEvent.position = item.itineraryEvent.position + 1;
          }
        }
      });
      // Finally, update the moving events position to the updated position
      dayMap[cur][result.source.index - 1].itineraryEvent.position =
        result.destination.index;
    } // Moving objects to unassigned
    if (
      result.source.droppableId === 'unassignedTasks' &&
      result.destination.droppableId === 'unassignedTasks'
    ) {
      return;
    }
    if (
      result.source.droppableId === 'unassignedTasks' &&
      result.destination.droppableId === 'assignedTasks'
    ) {
      Array.isArray(dayMap) &&
        dayMap[cur].forEach((item) => {
          if (item.itineraryEvent.position >= result.destination.index) {
            item.itineraryEvent.position = item.itineraryEvent.position + 1;
          }
        });
      if (dayMap[cur].length !== 0) {
        dayMap[0][result.source.index].itineraryEvent.position =
          result.destination.index;
        dayMap[0][result.source.index].itineraryEvent.day = cur;
      } else {
        dayMap[0][result.source.index].itineraryEvent.position = 1;
        dayMap[0][result.source.index].itineraryEvent.day = cur;
      }
    }
    if (
      result.destination.droppableId === 'unassignedTasks' &&
      result.source.droppableId === 'assignedTasks'
    ) {
      // Loop through the objects
      Array.isArray(dayMap) &&
        dayMap[cur].forEach((item) => {
          if (item.itineraryEvent.position > result.source.index) {
            item.itineraryEvent.position = item.itineraryEvent.position - 1;
          }
        });
      dayMap[cur][result.source.index - 1].itineraryEvent.position = null;
      dayMap[cur][result.source.index - 1].itineraryEvent.day = 0;
    }

    const updatedItineraryEvents =
      dayMap[cur] &&
      dayMap[cur].map((event) => {
        return event.itineraryEvent;
      });
    const massgedData = () => {
      if (dayMap[0]) {
        const updatedDay0Events =
          dayMap[0] &&
          dayMap[0].map((event) => {
            return event.itineraryEvent;
          });
        return [...updatedItineraryEvents, ...updatedDay0Events];
      }
      return updatedItineraryEvents;
    };
    // Pass it to the backend for updating
    updatedItineraryEvents.sort((a, b) => {
      return a.position - b.position;
    });
    dayMap[cur].sort((a, b) => {
      return a.itineraryEvent.position - b.itineraryEvent.position;
    });
    dispatch(reorderItinerary(massgedData()));
  }

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <div className="flex bg-[url('https://travellersworldwide.com/wp-content/uploads/elementor/thumbs/shutterstock_623111885-1-scaled-phifxb7av8bl2lrxdes1syk43v9acwtvrveysd1ouo.jpg.webp')] font-[Poppins]">
        <Grid container>
          <Grid item xs={6}>
            <div className='px-5'>
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
              <div className='py-5 text-3xl font-bold'>Assigned</div>
              <div className='flex bg-red-200 rounded-lg font-[Poppins]'>
                <Droppable droppableId='assignedTasks'>
                  {(provided) => (
                    <ul
                      className='events'
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                    >
                      {itineraryEvents
                        ?.filter((event) => event.itineraryEvent.day === cur)
                        .map((event, index) => {
                          return (
                            <Draggable
                              key={event.id}
                              draggableId={String(event.id)}
                              index={event.itineraryEvent.position}
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
              </div>
              <div className='py-5 text-3xl font-bold'>Unassigned</div>
              <div className='flex bg-blue-200 rounded-lg font-[Poppins]'>
                <Droppable droppableId='unassignedTasks'>
                  {(provided) => (
                    <ul
                      className='unassigned'
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                    >
                      {itineraryEvents
                        ?.filter((event) => event.itineraryEvent.day === 0)
                        .map((event, index) => {
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
    </DragDropContext>
  );
};

export default currentItineraryView;
