import postActions from '../actions/post';

const {POST_ERROR, POST_LOADING, POST_SUCCESS} = postActions;

const initState = {
  loading: false,
  data: null,
};

const postReducer = (state = initState, action) => {
  switch (action.type) {
    case POST_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case POST_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: action.response,
      };
    }
    case POST_ERROR: {
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

export default postReducer;
