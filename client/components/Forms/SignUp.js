import React from 'react';
import { connect } from 'react-redux';
import { authenticate } from '../../store';

const AuthSignUp = (props) => {
  const { name, displayName, handleSubmit, error } = props;
  return (
    <div
      className='w-full h-screen bg-no-repeat bg-cover bg-center bg-fixed flex grow'
      style={{
        backgroundImage: `url('https://media.istockphoto.com/photos/young-man-arms-outstretched-by-the-sea-at-sunrise-enjoying-freedom-picture-id1285301614?b=1&k=20&m=1285301614&s=612x612&w=0&h=oL04ACGYXP5cepM8NLZIyJaeUjuYoXYIrTT-Ej2jTAQ=')`,
      }}
    >
      <div className='position-fixed'>
        <form onSubmit={handleSubmit} name={name} className='px-20'>
          <div className='font-bold'>
            <label
              htmlFor='email'
              className='block text-gray-700 text-sm font-bold mb-2'
            >
              <small>Email</small>
            </label>
            <input name='email' type='text' className='border-black' />
          </div>
          <div>
            <label
              htmlFor='password'
              className='block text-gray-700 text-sm font-bold mb-2'
            >
              <small>Password</small>
            </label>
            <input name='password' type='password' className='border-black' />
          </div>
          <div>
            <label
              htmlFor='firstName'
              className='block text-gray-700 text-sm font-bold mb-2'
            >
              <small>First Name</small>
            </label>
            <input name='firstName' type='text' className='border-black' />
          </div>
          <div>
            <label
              htmlFor='lastName'
              className='block text-gray-700 text-sm font-bold mb-2'
            >
              <small>Last Name</small>
            </label>
            <input name='lastName' type='text' className='border-black' />
          </div>
          <div>
            <button type='submit'>{displayName}</button>
          </div>
          {error && error.response && <div> {error.response.data} </div>}
        </form>
      </div>
      <div className='fixed inset-x-0 bottom-0 pl-48 pb- 24 text-white font-mono text-6xl'>
        Travel Happiness is a few clicks away!
      </div>
    </div>
  );
};

const mapSignup = (state) => {
  return {
    name: 'signup',
    displayName: 'Create Account',
    error: state.auth.error,
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleSubmit(evt) {
      evt.preventDefault();
      const formName = evt.target.name;
      const email = evt.target.email.value;
      const password = evt.target.password.value;
      const firstName = evt.target.firstName.value;
      const lastName = evt.target.lastName.value;

      dispatch(authenticate(email, password, firstName, lastName, formName));
    },
  };
};

export const SignUp = connect(mapSignup, mapDispatch)(AuthSignUp);
