import React, { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ActiveItinCard from '../components/ActiveItinCard';
import { fetchItineraries } from '../store/itinerary';

export const activeItinerariesView = (props) => {
  const itins = [
    {
      id: 1,
      name: 'Vacation',
      city: 'Los Angeles',
      description: `My vacation in LA`,
      startDate: '2022-09-29',
      endDate: '2022-10-02',
    },
    {
      id: 2,
      name: 'Island Hopping',
      city: 'Honolulu',
      description: `Island hopping between Hawai'i, O'Ahu, Maui, and Kauai`,
      startDate: '2022-11-06',
      endDate: '2022-11-13',
    },
  ];

  const user = useSelector((state) => state.auth);
  const itineraries = useSelector((state) => state.itinerary);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchItineraries(user.id));
  }, []);

  return (
    <div>
      <div className='flex justify-center'>
        <Link to={'/create'}>
          <button className='btn btn-blue'>Create an Itinerary</button>
        </Link>
      </div>
      <div className='flex justify-center flex-col'>
        {itineraries?.map((itin) => (
          <ActiveItinCard key={itin.id} itin={itin} />
        ))}
      </div>
    </div>
  );
};

export default activeItinerariesView;

//------------------------------
// import React from 'react';
// import { fetchItineraries } from '../../store/Itinerary';
// import Test from './test';
// import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
// export class DisplayItinerary extends React.Component {
//   componentDidMount() {
//     this.props.fetchItineraries(this.props.user.id);
//     console.log('hereeeeeeee', this.props);
//   }

//   render() {
//     let userItineraries = this.props.itineraries ? this.props.itineraries : [];

//     return (
//       <div>
//         <div>
//           {userItineraries.length ? (
//             <div>
//               <h2>Your Itinerary is:</h2>
//               {userItineraries.map((itinerary) => (
//                 <div key={itinerary.id}>
//                   <div>{itinerary.name}</div>
//                   <form>
//                     <button type='submit'>Delete</button>
//                   </form>
//                   <br />
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <h2 className='textColor'>Your Itinerary is empty</h2>
//           )}
//         </div>
//       </div>
//     );
//   }
// }
// const mapState = (state) => {
//   return {
//     itineraries: state.itineraryReducer,
//   };
// };
// const mapDispatch = (dispatch, { history }) => {
//   return {
//     fetchItineraries: (userId) => dispatch(fetchItineraries(userId)),
//   };
// };
// export default connect(mapState, mapDispatch)(DisplayItinerary);
