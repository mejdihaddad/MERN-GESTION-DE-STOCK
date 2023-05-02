export const getArticlesStart = () => ({
  type: "GET_ARTICLES_START",
});

export const getArticlesSuccess = (articles) => ({
  type: "GET_ARTICLES_SUCCESS",
  payload: articles,
});

export const getArticlesFailure = () => ({
  type: "GET_ARTICLES_FAILURE",
});

export const createArticleStart = () => ({
  type: "CREATE_ARTICLE_START",
});

export const createArticleSuccess = (article) => ({
  type: "CREATE_ARTICLE_SUCCESS",
  payload: article,
});

export const createArticleFailure = () => ({
  type: "CREATE_ARTICLE_FAILURE",
});

export const updateArticleStart = () => ({
  type: "UPDATE_ARTICLE_START",
});

export const updateArticleSuccess = (id) => ({
  type: "UPDATE_ARTICLE_SUCCESS",
  payload: id,
});

export const updateArticleFailure = () => ({
  type: "UPDATE_ARTICLE_FAILURE",
});

export const deleteArticleStart = () => ({
  type: "DELETE_ARTICLE_START",
});

export const deleteArticleSuccess = (id) => ({
  type: "DELETE_ARTICLE_SUCCESS",
  payload: id,
});

export const deleteArticleFailure = () => ({
  type: "DELETE_ARTICLE_FAILURE",
});