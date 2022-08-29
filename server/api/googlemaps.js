import axios from 'axios';

const URL =
  'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

export const getPlacesData = async (sw, ne) => {
  try {
    const {
      data: { data },
    } = await axios.get(URL, {
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
      },
      headers: {
        'X-RapidAPI-Key': '25cf2cdd92msh83f388dcffb23b6p134b9fjsn51a2cfe5f7f1',
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
      },
    });
    // console.log(data);
    return data;
  } catch (err) {
    // console.log(err);
  }
};
