import axios from "axios";
import {
  createArticleFailure,
  createArticleStart,
  createArticleSuccess,
  deleteArticleFailure,
  deleteArticleStart,
  deleteArticleSuccess,
  getArticlesFailure,
  getArticlesStart,
  getArticlesSuccess,
  updateArticleStart,
  updateArticleSuccess,
  updateArticleFailure
} from "./ArticleActions";

export const getArticles = async (dispatch) => {
  dispatch(getArticlesStart());
  try {
    const res = await axios.get("/articles", {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("utilisateur")).accessToken,
      },
    });
    dispatch(getArticlesSuccess(res.data));
  } catch (err) {
    dispatch(getArticlesFailure());
  }
};

//create
export const createArticle = async (article, dispatch) => {
  dispatch(createArticleStart());
  try {
    const res = await axios.post("/articles", article, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("utilisateur")).accessToken,
      },
    });
    dispatch(createArticleSuccess(res.data));
  } catch (err) {
    dispatch(createArticleFailure());
  }
};
//modifier

export const updateArticle = async (id, article, dispatch) => {
  dispatch(updateArticleStart());
  try {
    const res = await axios.put("/articles/"+id, article, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("utilisateur")).accessToken,
      },
    });
    dispatch(updateArticleSuccess(res.data));
  } catch (err) {
    dispatch(updateArticleFailure());
  }
};
//delete
export const deleteArticle = async (id, dispatch) => {
  dispatch(deleteArticleStart());
  try {
    await axios.delete("/articles/" + id, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("utilisateur")).accessToken,
      },
    });
    dispatch(deleteArticleSuccess(id));
  } catch (err) {
    dispatch(deleteArticleFailure());
  }
};