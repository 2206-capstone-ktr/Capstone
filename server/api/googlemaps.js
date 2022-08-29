import axios from 'axios';

const URL =
  'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

const options = {
  params: {
    bl_latitude: '11.847676',
    tr_latitude: '12.838442',
    bl_longitude: '109.095887',
    tr_longitude: '109.149359',
  },
  headers: {
    'X-RapidAPI-Key': '25cf2cdd92msh83f388dcffb23b6p134b9fjsn51a2cfe5f7f1',
    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
  },
};

export const getPlacesData = async () => {
  try {
    const {
      data: { data },
    } = await axios.get(URL, options);
    return data;
  } catch (err) {
    console.log(err);
  }
};
