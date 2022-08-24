import axios from 'axios';
// action type

const GET_ITINERARIES = 'GET_ITINERARIES';
const SET_ITINERARY = 'SET_ITINERARY';
const DELETE_ITINERARY = 'DELETE_ITINERARY';

// action creator(s)

export const getItineraries = (itineraries) => {
  return {
    type: GET_ITINERARIES,
    itineraries,
  };
};
export const setItinerary = (itinerary) => {
  return {
    type: SET_ITINERARY,
    itinerary,
  };
};
export const deleteItinerary = (itinerary) => {
  return {
    type: DELETE_ITINERARY,
    itinerary,
  };
};

// thunks

export const fetchItineraries = (userId) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/api/users/${userId}/itineraries`);
    dispatch(getItineraries(data));
  } catch (error) {
    return error;
  }
};
export const createItinerary = (itinerary, userId) => async (dispatch) => {
  try {
    const { data } = await axios.post(
      `/api/users/${userId}/itinerary`,
      itinerary
    );
    dispatch(setItinerary(data));
  } catch (error) {
    return error;
  }
};
export const deleteItineraryById = (itineraryId) => async (dispatch) => {
  try {
    const { data } = await axios.delete(`/api/itineraries/${itineraryId}`);
    dispatch(deleteItinerary(data));
  } catch (error) {
    return error;
  }
};

//Reducer
export default function itinerary(state = [], action) {
  switch (action.type) {
    case GET_ITINERARIES:
      return action.itineraries;
    case SET_ITINERARY:
      return {
        ...state,
        itineraries: [...state.itineraries, action.itinerary],
      };
    case DELETE_ITINERARY:
      console.log(state);
      return state.itinararies.filter(
        (itinerary) => itinerary.id !== action.id
      );

    default:
      return state;
  }
}
