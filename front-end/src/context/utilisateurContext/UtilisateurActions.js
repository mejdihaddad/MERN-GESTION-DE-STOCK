export const getUtilisateursStart = () => ({
  type: "GET_UTILISATEURS_START",
});

export const getUtilisateursSuccess = (utilisateurs) => ({
  type: "GET_UTILISATEURS_SUCCESS",
  payload: utilisateurs,
});

export const getUtilisateursFailure = () => ({
  type: "GET_UTILISATEURS_FAILURE",
});

export const createUtilisateurStart = () => ({
  type: "CREATE_UTILISATEUR_START",
});

export const createUtilisateurSuccess = (utilisateur) => ({
  type: "CREATE_UTILISATEUR_SUCCESS",
  payload: utilisateur,
});

export const createUtilisateurFailure = () => ({
  type: "CREATE_UTILISATEUR_FAILURE",
});

export const updateUtilisateurStart = () => ({
  type: "UPDATE_UTILISATEUR_START",
});

export const updateUtilisateurSuccess = (utilisateur) => ({
  type: "UPDATE_UTILISATEUR_SUCCESS",
  payload: utilisateur,
});

export const updateUtilisateurFailure = () => ({
  type: "UPDATE_UTILISATEUR_FAILURE",
});

export const deleteUtilisateurStart = () => ({
  type: "DELETE_UTILISATEUR_START",
});

export const deleteUtilisateurSuccess = (id) => ({
  type: "DELETE_UTILISATEUR_SUCCESS",
  payload: id,
});

export const deleteUtilisateurFailure = () => ({
  type: "DELETE_UTILISATEUR_FAILURE",
});