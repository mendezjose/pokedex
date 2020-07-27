import axios from "axios";
import { apiCallBegan, apiCallFailed, apiCallSuccess } from "../api";

export const api = ({ dispatch }) => (next) => async (action) => {
  if (action.type !== apiCallBegan.type) return next(action);

  next(action);
  const { url, data, method, onSuccess, onError } = action.payload;

  try {
    const response = await axios({
      baseURL: "https://pokeapi.co/api/v2/pokemon?limit=807",
      url,
      method,
      data,
    });

    //General
    dispatch(apiCallSuccess(response.data));
    //Specific
    if (onSuccess) dispatch({ type: onSuccess, payload: response.data });
  } catch (error) {
    //General
    dispatch(apiCallFailed({ message: error.message }));
    //Specific
    if (onError) dispatch({ type: onError, payload: error.message });
  }
};
