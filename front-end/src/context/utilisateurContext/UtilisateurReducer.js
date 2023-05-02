const UtilisateurReducer = (state, action) => {
  switch (action.type) {
    case "GET_UTILISATEURS_START":
      return {
        utilisateurs: [],
        isFetching: true,
        error: false,
      };
    case "GET_UTILISATEURS_SUCCESS":
      return {
        utilisateurs: action.payload,
        isFetching: false,
        error: false,
      };
    case "GET_UTILISATEURS_FAILURE":
      return {
        utilisateurs: [],
        isFetching: false,
        error: true,
      };
    case "CREATE_UTILISATEUR_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "CREATE_UTILISATEUR_SUCCESS":
      return {
        utilisateurs: [...state.utilisateurs, action.payload],
        isFetching: false,
        error: false,
      };
    case "CREATE_UTILISATEUR_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    case "UPLOAD_UTILISATEUR_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "UPLOAD_UTILISATEUR_SUCCESS":
      return {
        utilisateurs: state.utilisateurs.map(
          (utilisateur) => utilisateur._id === action.payload._id && action.payload
        ),
        isFetching: false,
        error: false,
      };
    case "UPLOAD_UTILISATEUR_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    case "DELETE_UTILISATEUR_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "DELETE_UTILISATEUR_SUCCESS":
      return {
        utilisateurs: state.utilisateurs.filter((utilisateur) => utilisateur._id !== action.payload),
        isFetching: false,
        error: false,
      };
    case "DELETE_UTILISATEUR_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    default:
      return { ...state };
  }
};

export default UtilisateurReducer;