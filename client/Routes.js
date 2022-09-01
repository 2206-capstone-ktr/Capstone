import React, { Component, Fragment } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { withRouter, Route, Switch, Redirect } from 'react-router-dom';
import CreateItinerary from './components/Forms/CreateItin';
import Search from './components/Search/Search';
import { Login } from './components/Forms/Login';
import { SignUp } from './components/Forms/SignUp';
import Home from './components/Home';

import { me } from './store';
import activeItinerariesView from './views/activeItinerariesView';
import currentItineraryView from './views/currentItineraryView';

const Routes = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.id);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(me());
  }, []);

  return (
    <div>
      {isLoggedIn ? (
        <Switch>
          <Route path='/home' component={Home} />
          <Route path='/create' component={CreateItinerary} />

          <Route path='/activeitineraries' component={activeItinerariesView} />
          <Route path='/currentitinerary' component={currentItineraryView} />
          <Route path='/search' component={Search} />
          <Redirect to='/home' />
        </Switch>
      ) : (
        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/signup' component={SignUp} />
          <Route path='/' exact component={Login} />
        </Switch>
      )}
    </div>
  );
};
export default Routes;
