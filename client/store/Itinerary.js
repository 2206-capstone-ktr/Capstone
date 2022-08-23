import axios from 'axios';
// action type

const GET_ITINERARIES = 'GET_ITINERARIES';

// action creator(s)

export const getItineraries = (itineraries) => {
  return {
    type: GET_ITINERARIES,
    itineraries,
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

//Reducer
export default function itineraryReducer(state = [], action) {
  switch (action.type) {
    case GET_ITINERARIES:
      return action.itineraries;
    default:
      return state;
  }
}
