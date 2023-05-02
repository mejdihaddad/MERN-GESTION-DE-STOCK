import axios from "axios";
import {
  createEmployeFailure,
  createEmployeStart,
  createEmployeSuccess,
  deleteEmployeFailure,
  deleteEmployeStart,
  deleteEmployeSuccess,
  updateEmployeFailure,
  updateEmployeStart,
  updateEmployeSuccess,
  getEmployesFailure,
  getEmployesStart,
  getEmployesSuccess,
} from "./EmployeActions";

export const getEmployes = async (dispatch) => {
  dispatch(getEmployesStart());
  try {
    const res = await axios.get("/employes", {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("utilisateur")).accessToken,
      },
    });
    dispatch(getEmployesSuccess(res.data));
  } catch (err) {
    dispatch(getEmployesFailure());
  }
};

//create
export const createEmploye = async (employe, dispatch) => {
  dispatch(createEmployeStart());
  try {
    const res = await axios.post("/employes", employe, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("utilisateur")).accessToken,
      },
    });
    dispatch(createEmployeSuccess(res.data));
  } catch (err) {
    dispatch(createEmployeFailure());
  }
};

export const updateEmploye = async (id, employe, dispatch) => {
  dispatch(updateEmployeStart());
  try {
    const res = await axios.put("/employes/"+id, employe, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("utilisateur")).accessToken,
      },
    });
    dispatch(updateEmployeSuccess(res.data));
  } catch (err) {
    dispatch(updateEmployeFailure());
  }
};

//delete
export const deleteEmploye = async (id, dispatch) => {
  dispatch(deleteEmployeStart());
  try {
    await axios.delete("/employes/" + id, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("utilisateur")).accessToken,
      },
    });
    dispatch(deleteEmployeSuccess(id));
  } catch (err) {
    dispatch(deleteEmployeFailure());
  }
};