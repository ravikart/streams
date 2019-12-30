const INITIAL_STATE = {
  isSignedIn: null,
  userId: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SIGN-IN":
      return { ...state, isSignedIn: true, userId: action.payLoad };
    case "SIGN-OUT":
      return { ...state, isSignedIn: false, userId: null };
    default:
      return state;
  }
};
