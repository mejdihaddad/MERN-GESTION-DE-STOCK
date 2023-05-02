import axios from "axios";
import {
  createCategorieFailure,
  createCategorieStart,
  updateCategorieSuccess,
  updateCategorieFailure,
  updateCategorieStart,
  createCategorieSuccess,
  deleteCategorieFailure,
  deleteCategorieStart,
  deleteCategorieSuccess,
  getCategoriesFailure,
  getCategoriesStart,
  getCategoriesSuccess,
} from "./CategorieActions";

export const getCategories = async (dispatch) => {
  dispatch(getCategoriesStart());
  try {
    const res = await axios.get("/categories", {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("utilisateur")).accessToken,
      },
    });
    dispatch(getCategoriesSuccess(res.data));
  } catch (err) {
    dispatch(getCategoriesFailure());
  }
};

export const updateCategorie = async (id, categorie, dispatch) => {
  dispatch(updateCategorieStart());
  try {
    const res = await axios.put("/categories/"+id, categorie, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("utilisateur")).accessToken,
      },
    });
    dispatch(updateCategorieSuccess(res.data));
  } catch (err) {
    dispatch(updateCategorieFailure());
  }
};


//create
export const createCategorie = async (categorie, dispatch) => {
  dispatch(createCategorieStart());
  try {
    const res = await axios.post("/categories", categorie, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("utilisateur")).accessToken,
      },
    });
    dispatch(createCategorieSuccess(res.data));
  } catch (err) {
    dispatch(createCategorieFailure());
  }
};

//delete
export const deleteCategorie = async (id, dispatch) => {
  dispatch(deleteCategorieStart());
  try {
    await axios.delete("/categories/" + id, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("utilisateur")).accessToken,
      },
    });
    dispatch(deleteCategorieSuccess(id));
  } catch (err) {
    dispatch(deleteCategorieFailure());
  }
};