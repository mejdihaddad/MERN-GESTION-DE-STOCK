export const getFournisseursStart = () => ({
  type: "GET_FOURNISSEURS_START",
});

export const getFournisseursSuccess = (fournisseurs) => ({
  type: "GET_FOURNISSEURS_SUCCESS",
  payload: fournisseurs,
});

export const getFournisseursFailure = () => ({
  type: "GET_FOURNISSEURS_FAILURE",
});

export const createFournisseurStart = () => ({
  type: "CREATE_FOURNISSEUR_START",
});

export const createFournisseurSuccess = (fournisseur) => ({
  type: "CREATE_FOURNISSEUR_SUCCESS",
  payload: fournisseur,
});

export const createFournisseurFailure = () => ({
  type: "CREATE_FOURNISSEUR_FAILURE",
});

export const updateFournisseurStart = () => ({
  type: "UPDATE_FOURNISSEUR_START",
});

export const updateFournisseurSuccess = (fournisseur) => ({
  type: "UPDATE_FOURNISSEUR_SUCCESS",
  payload: fournisseur,
});

export const updateFournisseurFailure = () => ({
  type: "UPDATE_FOURNISSEUR_FAILURE",
});

export const deleteFournisseurStart = () => ({
  type: "DELETE_FOURNISSEUR_START",
});

export const deleteFournisseurSuccess = (id) => ({
  type: "DELETE_FOURNISSEUR_SUCCESS",
  payload: id,
});

export const deleteFournisseurFailure = () => ({
  type: "DELETE_FOURNISSEUR_FAILURE",
});