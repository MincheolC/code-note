import React, { useEffect } from 'react';
import { AuthWrapper } from '../components/Auth';
import { useDispatch } from 'react-redux';
import { setHeaderVisibility } from '../redux/modules/base';
import { Route } from 'react-router-dom';
import { Login, SignUp } from '../containers/Auth';

function Auth() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setHeaderVisibility(false));
    return () => dispatch(setHeaderVisibility(true));
  }, [dispatch])

  return (
    <AuthWrapper>
      <Route path='/auth/login' component={Login} />
      <Route path='/auth/signup' component={SignUp} />
    </AuthWrapper>
  );
}

export default Auth;