export const loginStart = () => ({
    type: "LOGIN_START",
  });
  export const loginSuccess = (utilisateur) => ({
    type: "LOGIN_SUCCESS",
    payload: utilisateur,
  });
  export const loginFailure = () => ({
    type: "LOGIN_FAILURE",
  });
  
  //logout
  
  export const logout = () => ({
    type: "LOGOUT",
  }); 