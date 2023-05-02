const ArticleReducer = (state, action) => {
  switch (action.type) {
    case "GET_ARTICLES_START":
      return {
        articles: [],
        isFetching: true,
        error: false,
      };
    case "GET_ARTICLES_SUCCESS":
      return {
        articles: action.payload,
        isFetching: false,
        error: false,
      };
    case "GET_ARTICLES_FAILURE":
      return {
        articles: [],
        isFetching: false,
        error: true,
      };
    case "CREATE_ARTICLE_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "CREATE_ARTICLE_SUCCESS":
      return {
        articles: [...state.articles, action.payload],
        isFetching: false,
        error: false,
      };
    case "CREATE_ARTICLE_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    case "UPLOAD_ARTICLE_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "UPLOAD_ARTICLE_SUCCESS":
      return {
        articles: state.articles.map(
          (article) => article._id === action.payload._id && action.payload
        ),
        isFetching: false,
        error: false,
      };
    case "UPLOAD_ARTICLE_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    case "DELETE_ARTICLE_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "DELETE_ARTICLE_SUCCESS":
      return {
        articles: state.articles.filter((article) => article._id !== action.payload),
        isFetching: false,
        error: false,
      };
    case "DELETE_ARTICLE_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    default:
      return { ...state };
  }
};

export default ArticleReducer;