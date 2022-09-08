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
        <div className='px-5 pb-4'>
          <h4 className='font-bold  text-yellow-600 pt-40 pb-4 px-5 text-2xl'>
            Basic Information
          </h4>
          <form>
            <div className=''>
              <label className='font-bold  text-yellow-600 text-xl'>
                Itinerary Name
              </label>
              <input
                type='text'
                name='name'
                onChange={handleChange}
                value={name}
              />
              <label className='font-bold  text-yellow-600 text-xl pt-8'>
                Description
              </label>
              <input
                type='text'
                name='description'
                onChange={handleChange}
                value={description}
                //className='h-20'
              />

              <label className='font-bold  text-yellow-600 text-xl pt-8'>
                City
              </label>
              <input
                type='text'
                name='city'
                onChange={handleChange}
                value={city}
              />
              <h4 className='font-bold  text-yellow-600 pt-8 pb-4 text-2xl'>
                Trip Date
              </h4>
              <label
                htmlFor='start'
                className='font-bold  text-yellow-600 text-xl'
              >
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
              <label
                htmlFor='end'
                className='font-bold  text-yellow-600 text-xl pt-8'
              >
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
          </form>
          <br></br>
          <div className='flex flex-col space-y-4 px-5'>
            <button
              className='bg-red-200 hover:bg-red-300 opacity-75  rounded-full text-xl text-yellow-600 h-8 w-52'
              type='submit'
              onClick={handleClick}
            >
              Add Itinerary
            </button>
            <button
              className='bg-red-200 hover:bg-red-300 opacity-75  rounded-full text-xl text-yellow-600 h-8 w-52'
              type='submit'
            >
              Invite Others
            </button>
          </div>
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
