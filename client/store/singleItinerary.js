import axios from 'axios';
// action type

const GET_ITINERARY = 'GET_ITINERARY';

// action creator(s)

export const getItinerary = (itinerary) => {
  return {
    type: GET_ITINERARY,
    itinerary,
  };
};

// thunks

export const fetchItinerary = (itineraryId) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/api/itineraries/${itineraryId}`);
    dispatch(getItineraries(data));
  } catch (error) {
    return error;
  }
};

//Reducer
export default function (state = {}, action) {
  switch (action.type) {
    case GET_ITINERARY:
      return action.itinerary;
    default:
      return state;
  }
}
