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
      <div
        className='w-full h-screen bg-no-repeat bg-cover bg-center bg-fixed '
        style={{
          backgroundImage: `url('https://media.istockphoto.com/photos/young-man-arms-outstretched-by-the-sea-at-sunrise-enjoying-freedom-picture-id1285301614?b=1&k=20&m=1285301614&s=612x612&w=0&h=oL04ACGYXP5cepM8NLZIyJaeUjuYoXYIrTT-Ej2jTAQ=')`,
        }}
      >
        <div>
          <h4 className='font-bold  text-yellow-600 py-5 px-5'>
            Basic Information
          </h4>
          <form>
            <div className=''>
              <label className='font-bold  text-yellow-600'>
                Itinerary Name
              </label>
              <input
                type='text'
                name='name'
                onChange={handleChange}
                value={name}
              />
              <label className='font-bold  text-yellow-600'>Description</label>
              <input
                type='text'
                name='description'
                onChange={handleChange}
                value={description}
              />

              <label className='font-bold  text-yellow-600'>City</label>
              <input
                type='text'
                name='city'
                onChange={handleChange}
                value={city}
              />
              <h4 className='font-bold  text-yellow-600'>Trip Date</h4>
              <label htmlFor='start' className='font-bold  text-yellow-600'>
                Start Date:
              </label>
              <input
                type='date'
                id='start'
                name='startDate'
                onChange={handleChange}
                value={startDate}
                className='font-bold  text-yellow-600'
              />
              <label htmlFor='end' className='font-bold  text-yellow-600'>
                End Date:
              </label>
              <input
                type='date'
                id='end'
                name='endDate'
                onChange={handleChange}
                value={endDate}
                className='font-bold  text-yellow-600'
              />
            </div>
            <button
              className='btn btn-blue'
              type='submit'
              onClick={handleClick}
            >
              Add Itinerary
            </button>
            <button className='btn btn-blue ' type='submit'>
              Invite Others
            </button>
          </form>
        </div>
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
