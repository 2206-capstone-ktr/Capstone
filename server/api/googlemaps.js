import axios from 'axios';

export const getPlacesData = async (type, sw, ne) => {
  try {
    if (sw.lng > 180) {
      sw.lng = -360 + sw.lng;
      ne.lng = -360 + ne.lng;
    }
    if (sw.lng < -180) {
      sw.lng = 360 + sw.lng;
      ne.lng = 360 + ne.lng;
    }
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      {
        params: {
          bl_latitude: sw.lat,
          tr_latitude: ne.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng,
        },
        headers: {
          'X-RapidAPI-Key':
            '8f79e2cc0fmsh6fa3fab65cfd3f3p154461jsnf7a8d38a9ffd',
          'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
        },
      }
    );

    return data;
  } catch (err) {
    console.log(err);
  }
};
