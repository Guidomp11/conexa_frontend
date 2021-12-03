import React, { useEffect } from 'react';
import './App.css';
import {BrowserRouter as Router, Switch} from 'react-router-dom';

import useToken from './hooks/useToken';

import { useDispatch, useSelector } from 'react-redux';
import { authenticateUser } from './redux/actions/authActions';

import PublicRoute from './components/routes/PublicRoute';
import PrivateRoute from './components/routes/PrivateRoute';

import SignIn from './screens/Signin';
import SignUp from './screens/Signup';
import Home from './screens/Home';
import Posts from './screens/Posts';
import Photos from './screens/Photos';
import Header from './components/header/Header';
import Spinner from './components/spinner/Spinner';

function App() {

  const auth = useToken();
  const dispatch = useDispatch();
  const { user, loading } = useSelector(state => state.auth);
  const { listingLoading } = useSelector(state => state.listing);

  useEffect(() => {
    const onAuth = () => {
      if(auth){
        dispatch(authenticateUser(auth));
      }
    }

    onAuth();
  }, [auth])

  return (
    <Router>
        {loading || listingLoading && <Spinner />}
        {user && <Header />}
        <Switch>
          <PublicRoute extact path="/signup" component={SignUp} />
          <PublicRoute extact path="/signin" component={SignIn} />

          <PrivateRoute extact path='/photos' component={Photos} />
          <PrivateRoute extact path='/posts' component={Posts} />
          <PrivateRoute extact path='/' component={Home} />
        </Switch>
    </Router>
  );
}

export default App;
