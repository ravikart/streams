import streams from "../apis/streams";

export const signIn = userId => {
  return {
    type: "SIGN-IN",
    payload: userId
  };
};

export const signOut = () => {
  return {
    type: "SIGN-OUT"
  };
};

export const createStream = formValues => {
  return async dispatch => {
    streams.post("/streams", formValues);
  };
};
