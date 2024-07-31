import { store } from "../store";

export const incAction = () => async (dispatch) => {
  const { data } = await store.getState().counter;
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

export const decAction = () => async (dispatch) => {
  const { data } = await store.getState().counter;
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
