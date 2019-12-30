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
