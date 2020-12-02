import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setHeaderVisibility } from '../redux/modules/base';

function Auth() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setHeaderVisibility(false));
    return () => dispatch(setHeaderVisibility(true));
  }, [dispatch])

  return <div>Auth</div>;
}

export default Auth;