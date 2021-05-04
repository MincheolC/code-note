import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { Home, Auth } from './pages';
import HeaderContainer from './containers/Base/HeaderContainer';
import storage from './lib/storage';
import { checkStatus } from './redux/modules/auth';

function App() {
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    const id = storage.get('id');
    if (!id) return;

    dispatch(checkStatus());
  }, [dispatch])

  useEffect(() => {
    if (!auth.loading && auth.error && auth.status !== null) {
      storage.remove('id');
      window.location.href = '/auth/login?expired';
    }
  }, [auth])

  return (
    <div>
      <HeaderContainer />
      <Route exact path='/' render={props => storage.get('id') ? (
        <Home />
      ): (
        <Redirect to={{ pathname: '/auth/login', state: { from: props.location }}} />
      )}/>
      <Route path='/auth' component={Auth} />
    </div>
  );
}

export default App;
