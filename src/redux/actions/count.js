const countActions = {
  INCREMENT_LOADING: 'INCREMENT_LOADING',
  INCREMENT_SUCCESS: 'INCREMENT_SUCCESS',
  INCREMENT_ERROR: 'INCREMENT_ERROR',
};

const incrementLoading = (payload = null) => {
  return {
    type: countActions.INCREMENT_LOADING,
    payload,
  };
};

const incrementSuccess = response => {
  return {
    type: countActions.INCREMENT_SUCCESS,
    response,
  };
};

const incrementError = error => {
  return {
    type: countActions.INCREMENT_ERROR,
    error,
  };
};

export {incrementLoading, incrementSuccess, incrementError};
export default countActions;
