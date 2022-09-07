import React from 'react';
import { connect } from 'react-redux';
import { loginauthenticate } from '../../store';

const AuthLogin = (props) => {
  const { name, displayName, handleSubmit, error } = props;
  return (
    <div
      className='w-full h-screen bg-no-repeat bg-cover bg-center bg-fixed flex grow'
      style={{
        backgroundImage: `url('https://media.istockphoto.com/photos/young-man-arms-outstretched-by-the-sea-at-sunrise-enjoying-freedom-picture-id1285301614?b=1&k=20&m=1285301614&s=612x612&w=0&h=oL04ACGYXP5cepM8NLZIyJaeUjuYoXYIrTT-Ej2jTAQ=')`,
      }}
    >
      <div>
        <form onSubmit={handleSubmit} name={name}>
          <div className='px-40 '>
            <label
              htmlFor='email'
              className='block text-gray-700 text-sm font-bold mb-2'
            >
              <small className='textColor'>Email</small>
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
            <button type='submit'>{displayName}</button>
          </div>
          {error && error.response && <div> {error.response.data} </div>}
        </form>
      </div>
    </div>
  );
};

const mapLogin = (state) => {
  return {
    name: 'login',
    displayName: 'Login',
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

      dispatch(loginauthenticate(email, password, formName));
    },
  };
};

export const Login = connect(mapLogin, mapDispatch)(AuthLogin);
