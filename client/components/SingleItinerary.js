import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

export class SingleItinerary extends React.Component {
  render() {
    const { userId } = this.props;
    console.log(this.props);
    let itinerary = {
      location: 'Chicago',
    };
    return (
      <div>
        <Link to={`/users/${userId}/itineraries/:itineraryId`}>
          <h1>This is a test Itinerary</h1>
          <h3>City: {itinerary.location}</h3>
        </Link>
      </div>
    );
  }
}
export default connect()(SingleItinerary);
