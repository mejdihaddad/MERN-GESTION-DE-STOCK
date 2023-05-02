const AuthReducer = (state, action) => {
    switch (action.type) {
      case "LOGIN_START":
        return {
          utilisateur: null,
          isFetching: true,
          error: false,
        };
      case "LOGIN_SUCCESS":
        return {
          utilisateur: action.payload,
          isFetching: false,
          error: false,
        };
      case "LOGIN_FAILURE":
        return {
          utilisateur: null,
          isFetching: false,
          error: true,
        };
      case "LOGOUT":
        return {
          utilisateur: null,
          isFetching: false,
          error: false,
        };
      default:
        return { ...state };
    }
  };
  
  export default AuthReducer;