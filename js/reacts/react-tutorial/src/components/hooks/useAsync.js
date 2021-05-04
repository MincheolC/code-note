import { useReducer, useEffect } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'LOADING':
      return {
        isLoading: true,
        data: null,
        error: null,
      };
    case 'SUCCESS':
      return {
        isLoading: false,
        data: action.data,
        error: null,
      };
    case 'ERROR':
      return {
        isLoading: false,
        data: null,
        error: action.error,
      };
    default:
      throw new Error(`Unhandled action type ${action.type}`);
  }
}

const initialState = {
  isLoading: false,
  data: null,
  error: null,
};

function useAsync(callback, deps = [], skip = false) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const fetchData = async () => {
    dispatch({ type: 'LOADING' });
    try {
      const data = await callback();
      dispatch({ type: 'SUCCESS', data });
    } catch (e) {
      dispatch({ type: 'ERROR', error: e });
    }
  };

  useEffect(() => {
    if (!skip) fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return [state, fetchData];
}

export default useAsync;
