import React from 'react';

import { createItinerary, fetchItineraries } from '../../store/itinerary';
import { connect } from 'react-redux';

class CreateItinerary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      city: '',
      description: '',
      startDate: '',
      endDate: '',
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.props.fetchItineraries(this.props.userId);
  }
  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }
  handleClick(evt) {
    evt.preventDefault();
    this.props.createItinerary(this.state, this.props.userId);
    alert('Itinerary added successfully!');
    this.props.history.push(`/activeitineraries`);
  }

  render() {
    const { handleClick, handleChange } = this;
    const { name, city, description, startDate, endDate } = this.state;

    return (
      <div className='m-5'>
        <h3>Create Itinerary</h3>

        <h4>Basic Information</h4>
        <form>
          <div className=''>
            <label>Itinerary Name</label>
            <input
              type='text'
              name='name'
              onChange={handleChange}
              value={name}
            />
            <label>Description</label>
            <input
              type='text'
              name='description'
              onChange={handleChange}
              value={description}
            />

            <label>City</label>
            <input
              type='text'
              name='city'
              onChange={handleChange}
              value={city}
            />
            <h4>Trip Date</h4>
            <label htmlFor='start'>Start Date:</label>
            <input
              type='date'
              id='start'
              name='startDate'
              onChange={handleChange}
              value={startDate}
            />
            <label htmlFor='end'>End Date:</label>
            <input
              type='date'
              id='end'
              name='endDate'
              onChange={handleChange}
              value={endDate}
            />
          </div>
          <button className='btn btn-blue' type='submit' onClick={handleClick}>
            Add Itinerary
          </button>
          <button className='btn btn-blue' type='submit'>
            Invite Others
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userId: state.auth.id,
});
const mapDispatch = (dispatch) => {
  return {
    createItinerary: (itinerary, userId) =>
      dispatch(createItinerary(itinerary, userId)),
    fetchItineraries: (userId) => dispatch(fetchItineraries(userId)),
  };
};

export default connect(mapStateToProps, mapDispatch)(CreateItinerary);
