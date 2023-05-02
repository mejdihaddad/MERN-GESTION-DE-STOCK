const EmployeReducer = (state, action) => {
  switch (action.type) {
    case "GET_EMPLOYES_START":
      return {
        employes: [],
        isFetching: true,
        error: false,
      };
    case "GET_EMPLOYES_SUCCESS":
      return {
        employes: action.payload,
        isFetching: false,
        error: false,
      };
    case "GET_EMPLOYES_FAILURE":
      return {
        employes: [],
        isFetching: false,
        error: true,
      };
    case "CREATE_EMPLOYE_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "CREATE_EMPLOYE_SUCCESS":
      return {
        employes: [...state.employes, action.payload],
        isFetching: false,
        error: false,
      };
    case "CREATE_EMPLOYE_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    case "UPLOAD_EMPLOYE_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "UPLOAD_EMPLOYE_SUCCESS":
      return {
        employes: state.employes.map(
          (employe) => employe._id === action.payload._id && action.payload
        ),
        isFetching: false,
        error: false,
      };
    case "UPLOAD_EMPLOYE_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    case "DELETE_EMPLOYE_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "DELETE_EMPLOYE_SUCCESS":
      return {
        employes: state.employes.filter((employe) => employe._id !== action.payload),
        isFetching: false,
        error: false,
      };
    case "DELETE_EMPLOYE_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    default:
      return { ...state };
  }
};

export default EmployeReducer;