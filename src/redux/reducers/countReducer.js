import countActions from '../actions/count';

const {INCREMENT_ERROR, INCREMENT_LOADING, INCREMENT_SUCCESS} = countActions;

const initState = {
  loading: false,
  data: 0,
};

const countReducer = (state = initState, action) => {
  switch (action.type) {
    case INCREMENT_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case INCREMENT_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: state.data + 1,
      };
    }
    case INCREMENT_ERROR: {
      return {
        ...state,
        loading: false,
      };
    }
    default: {
      return {...state};
    }
  }
};

export default countReducer;
