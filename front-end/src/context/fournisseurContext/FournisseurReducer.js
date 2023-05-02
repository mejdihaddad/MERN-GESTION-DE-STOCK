const FournisseurReducer = (state, action) => {
  switch (action.type) {
    case "GET_FOURNISSEURS_START":
      return {
        fournisseurs: [],
        isFetching: true,
        error: false,
      };
    case "GET_FOURNISSEURS_SUCCESS":
      return {
        fournisseurs: action.payload,
        isFetching: false,
        error: false,
      };
    case "GET_FOURNISSEURS_FAILURE":
      return {
        fournisseurs: [],
        isFetching: false,
        error: true,
      };
    case "CREATE_FOURNISSEUR_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "CREATE_FOURNISSEUR_SUCCESS":
      return {
        fournisseurs: [...state.fournisseurs, action.payload],
        isFetching: false,
        error: false,
      };
    case "CREATE_FOURNISSEUR_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    case "UPLOAD_FOURNISSEUR_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "UPLOAD_FOURNISSEUR_SUCCESS":
      return {
        fournisseurs: state.fournisseurs.map(
          (fournisseur) => fournisseur._id === action.payload._id && action.payload
        ),
        isFetching: false,
        error: false,
      };
    case "UPLOAD_FOURNISSEUR_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    case "DELETE_FOURNISSEUR_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "DELETE_FOURNISSEUR_SUCCESS":
      return {
        fournisseurs: state.fournisseurs.filter((fournisseur) => fournisseur._id !== action.payload),
        isFetching: false,
        error: false,
      };
    case "DELETE_FOURNISSEUR_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    default:
      return { ...state };
  }
};

export default FournisseurReducer;