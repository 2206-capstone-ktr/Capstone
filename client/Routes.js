import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter, Route, Switch, Redirect } from 'react-router-dom';
import CreateItinerary from './components/Forms/CreateItin';
import { Login } from './components/Forms/Login';
import { SignUp } from './components/Forms/SignUp';
import Home from './components/Home';
import { DisplayItineraries } from './components/Iteneraries/Itineraries';
import { me } from './store';
import activeItinerariesView from './views/activeItinerariesView';

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData();
  }

  render() {
    const { isLoggedIn, userId } = this.props;

    return (
      <div>
        {isLoggedIn ? (
          <Switch>
            <Route path='/home' component={Home} />
            <Route path='/create' component={CreateItinerary} />
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
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.auth that has a truthy id.
    // Otherwise, state.auth will be an empty object, and state.auth.id will be falsey
    isLoggedIn: !!state.auth.id,
  };
};

const mapDispatch = (dispatch) => {
  return {
    loadInitialData() {
      dispatch(me());
    },
  };
};

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes));
