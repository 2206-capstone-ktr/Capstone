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
