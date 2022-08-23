import React from 'react';

const CreateItinerary = () => {
  return (
    <div>
      <h3>Create Itinerary</h3>

      <h4>Basic Information</h4>

      <div className='row'>
        <label>Itinerary Name</label>
        <input type='text' />
        <label>Destination</label>
        <input type='text' />
        <label>City</label>
        <input type='text' />
        <label>State</label>
        <input type='text' />
        <label>Country</label>
        <input type='text' />
        <h4>Trip Date</h4>
        <label htmlFor='start'>Start Date:</label>
        <input type='date' id='start' name='trip-start' />
        <label htmlFor='end'>End Date:</label>
        <input type='date' id='end' name='trip-end' />
      </div>
      <button type='submit'>Add Itinerary</button>
      <button type='submit'>Invite Others</button>
    </div>
  );
};
export default CreateItinerary;
