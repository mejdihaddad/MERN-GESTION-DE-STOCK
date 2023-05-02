import axios from "axios";
import {
  createUtilisateurFailure,
  createUtilisateurStart,
  createUtilisateurSuccess,
  updateUtilisateurFailure,
  updateUtilisateurStart,
  updateUtilisateurSuccess,
  deleteUtilisateurFailure,
  deleteUtilisateurStart,
  deleteUtilisateurSuccess,
  getUtilisateursFailure,
  getUtilisateursStart,
  getUtilisateursSuccess,
} from "./UtilisateurActions";


export const getUtilisateurs = async (dispatch) => {
  dispatch(getUtilisateursStart());
  try {
    const res = await axios.get("/utilisateurs", {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("utilisateur")).accessToken,
      },
    });
    dispatch(getUtilisateursSuccess(res.data));
  } catch (err) {
    dispatch(getUtilisateursFailure());
  }
};
export const updateUtilisateur = async (id, utilisateur, dispatch) => {
  dispatch(updateUtilisateurStart());
  try {
    const res = await axios.put("/utilisateurs/"+id, utilisateur, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("utilisateur")).accessToken,
      },
    });
    dispatch(updateUtilisateurSuccess(res.data));
  } catch (err) {
    dispatch(updateUtilisateurFailure());
  }
};


//create
export const createUtilisateur = async (utilisateur, dispatch) => {
  dispatch(createUtilisateurStart());
  try {
    const res = await axios.post("/auth/register", utilisateur, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("utilisateur")).accessToken,
      },
    });
    dispatch(createUtilisateurSuccess(res.data));
  } catch (err) {
    dispatch(createUtilisateurFailure());
  }
};

//delete
export const deleteUtilisateur = async (id, dispatch) => {
  dispatch(deleteUtilisateurStart());
  try {
    await axios.delete("/utilisateurs/" + id, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("utilisateur")).accessToken,
      },
    });
    dispatch(deleteUtilisateurSuccess(id));
  } catch (err) {
    dispatch(deleteUtilisateurFailure());
  }
};