export const getCategoriesStart = () => ({
  type: "GET_CATEGORIES_START",
});

export const getCategoriesSuccess = (categories) => ({
  type: "GET_CATEGORIES_SUCCESS",
  payload: categories,
});

export const getCategoriesFailure = () => ({
  type: "GET_CATEGORIES_FAILURE",
});

export const createCategorieStart = () => ({
  type: "CREATE_CATEGORIE_START",
});

export const createCategorieSuccess = (categorie) => ({
  type: "CREATE_CATEGORIE_SUCCESS",
  payload: categorie,
});

export const createCategorieFailure = () => ({
  type: "CREATE_CATEGORIE_FAILURE",
});

export const updateCategorieStart = () => ({
  type: "UPDATE_CATEGORIE_START",
});

export const updateCategorieSuccess = (categorie) => ({
  type: "UPDATE_CATEGORIE_SUCCESS",
  payload: categorie,
});

export const updateCategorieFailure = () => ({
  type: "UPDATE_CATEGORIE_FAILURE",
});

export const deleteCategorieStart = () => ({
  type: "DELETE_CATEGORIE_START",
});

export const deleteCategorieSuccess = (id) => ({
  type: "DELETE_CATEGORIE_SUCCESS",
  payload: id,
});

export const deleteCategorieFailure = () => ({
  type: "DELETE_CATEGORIE_FAILURE",
});