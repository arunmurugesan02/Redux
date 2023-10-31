const postActions = {
  POST_LOADING: 'POST_LOADING',
  POST_SUCCESS: 'POST_SUCCESS',
  POST_ERROR: 'POST_ERROR',
};

const postLoading = (payload = null) => {
  return {
    type: postActions.POST_LOADING,
    payload,
  };
};

const postSuccess = response => {
  return {
    type: postActions.POST_SUCCESS,
    response,
  };
};

const postError = error => {
  return {
    type: postActions.POST_ERROR,
    error,
  };
};

export {postLoading, postSuccess, postError};
export default postActions;
