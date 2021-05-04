const SET_HEADER_VISIBILITY = 'base/SET_HEADER_VISIBILITY';

export const setHeaderVisibility = (payload) => ({ type: SET_HEADER_VISIBILITY, payload });

const initialState = {
  header: {
    visible: true
  }
};

export default function base(state = initialState, action) {
  switch (action.type) {
    case SET_HEADER_VISIBILITY:
      return {
        ...initialState,
        header: {
          visible: action.payload,
        },
      };
    default:
      return state;
  }
}