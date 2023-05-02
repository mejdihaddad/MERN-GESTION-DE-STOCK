export const getEmployesStart = () => ({
  type: "GET_EMPLOYES_START",
});

export const getEmployesSuccess = (employes) => ({
  type: "GET_EMPLOYES_SUCCESS",
  payload: employes,
});

export const getEmployesFailure = () => ({
  type: "GET_EMPLOYES_FAILURE",
});

export const createEmployeStart = () => ({
  type: "CREATE_EMPLOYE_START",
});

export const createEmployeSuccess = (employe) => ({
  type: "CREATE_EMPLOYE_SUCCESS",
  payload: employe,
});

export const createEmployeFailure = () => ({
  type: "CREATE_EMPLOYE_FAILURE",
});

export const updateEmployeStart = () => ({
  type: "UPDATE_EMPLOYE_START",
});

export const updateEmployeSuccess = (employe) => ({
  type: "UPDATE_EMPLOYE_SUCCESS",
  payload: employe,
});

export const updateEmployeFailure = () => ({
  type: "UPDATE_EMPLOYE_FAILURE",
});

export const deleteEmployeStart = () => ({
  type: "DELETE_EMPLOYE_START",
});

export const deleteEmployeSuccess = (id) => ({
  type: "DELETE_EMPLOYE_SUCCESS",
  payload: id,
});

export const deleteEmployeFailure = () => ({
  type: "DELETE_EMPLOYE_FAILURE",
});