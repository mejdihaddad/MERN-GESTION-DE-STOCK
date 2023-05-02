import axios from "axios";
import { loginFailure, loginStart, loginSuccess } from "./AuthActions";

export const login = async (utilisateur, dispatch) => {
  dispatch(loginStart());
  try {
    const res = await axios.post("auth/login", utilisateur);
    res.data && dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};