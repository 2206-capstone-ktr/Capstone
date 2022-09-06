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
        <form onSubmit={handleSubmit} name={name}>
          <div>
            <label htmlFor='email'>
              <small>Email</small>
            </label>
            <input name='email' type='text' />
          </div>
          <div>
            <label htmlFor='password'>
              <small>Password</small>
            </label>
            <input name='password' type='password' />
          </div>
          <div>
            <label htmlFor='firstName'>
              <small>First Name</small>
            </label>
            <input name='firstName' type='text' />
          </div>
          <div>
            <label htmlFor='lastName'>
              <small>Last Name</small>
            </label>
            <input name='lastName' type='text' />
          </div>
          <div>
            <button type='submit'>{displayName}</button>
          </div>
          {error && error.response && <div> {error.response.data} </div>}
        </form>
      </div>
    </div>
  );
};

const mapSignup = (state) => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
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
