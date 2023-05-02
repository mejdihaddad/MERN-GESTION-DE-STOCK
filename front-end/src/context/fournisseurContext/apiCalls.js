import axios from "axios";
import {
  createFournisseurFailure,
  createFournisseurStart,
  createFournisseurSuccess,
  deleteFournisseurFailure,
  deleteFournisseurStart,
  deleteFournisseurSuccess,
  updateFournisseurFailure,
  updateFournisseurStart,
  updateFournisseurSuccess,
  getFournisseursFailure,
  getFournisseursStart,
  getFournisseursSuccess,
} from "./FournisseurActions";

export const getFournisseurs = async (dispatch) => {
  dispatch(getFournisseursStart());
  try {
    const res = await axios.get("/fournisseurs", {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("utilisateur")).accessToken,
      },
    });
    dispatch(getFournisseursSuccess(res.data));
  } catch (err) {
    dispatch(getFournisseursFailure());
  }
};

//create
export const createFournisseur = async (fournisseur, dispatch) => {
  dispatch(createFournisseurStart());
  try {
    const res = await axios.post("/fournisseurs", fournisseur, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("utilisateur")).accessToken,
      },
    });
    dispatch(createFournisseurSuccess(res.data));
  } catch (err) {
    dispatch(createFournisseurFailure());
  }
};
export const updateFournisseur = async (id, fournisseur, dispatch) => {
  dispatch(updateFournisseurStart());
  try {
    const res = await axios.put("/fournisseurs/"+id, fournisseur, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("utilisateur")).accessToken,
      },
    });
    dispatch(updateFournisseurSuccess(res.data));
  } catch (err) {
    dispatch(updateFournisseurFailure());
  }
};

//delete
export const deleteFournisseur = async (id, dispatch) => {
  dispatch(deleteFournisseurStart());
  try {
    await axios.delete("/fournisseurs/" + id, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("utilisateur")).accessToken,
      },
    });
    dispatch(deleteFournisseurSuccess(id));
  } catch (err) {
    dispatch(deleteFournisseurFailure());
  }
};