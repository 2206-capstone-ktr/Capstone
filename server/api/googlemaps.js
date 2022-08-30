import axios from 'axios';

export const getPlacesData = async (type, sw, ne) => {
  try {
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
            'b58431f263msh802d9f5742c878ap19e9b9jsn61a7b7986493',
          'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
        },
      }
    );
    console.log(data);
    return data;
  } catch (err) {
    // console.log(err);
  }
};
