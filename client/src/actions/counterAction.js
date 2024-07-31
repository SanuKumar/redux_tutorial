import { store } from "../store";

export const incAction = (dispatch) => {
  const { data } = store.getState().counter;
  try {
    dispatch({
      type: "ADD",
      payload: data + 1,
    });
  } catch (error) {
    dispatch({
      type: "COUNTER_ERROR",
      payload: error,
    });
  }
};

export const decAction = (dispatch) => {
  const { data } = store.getState().counter;
  try {
    dispatch({
      type: "SUB",
      payload: data - 1,
    });
  } catch (error) {
    dispatch({
      type: "COUNTER_ERROR",
      payload: error,
    });
  }
};
