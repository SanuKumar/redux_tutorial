import axios from "axios";

export const fetchUser = async (dispatch) => {
  try {
    dispatch({
      type: "FETCH_USER_REQUEST",
    });
    const [user] = await Promise.all([
      axios.get(`http://localhost:5001/api/users`),
    ]);
    setTimeout(
      () =>
        dispatch({
          type: "FETCH_USER",
          payload: user.data,
        }),
      0
    );
  } catch (error) {
    dispatch({
      type: "FETCH_USER_ERROR",
      payload: error.message,
    });
  }
};

export const viewUser = async (dispatch, id) => {
  try {
    dispatch({
      type: "VIEW_USER_REQUEST",
    });
    const user = await axios.get(`http://localhost:5001/api/users/${id}`);
    dispatch({
      type: "VIEW_USER",
      payload: user.data,
    });
  } catch (error) {
    dispatch({
      type: "VIEW_USER_ERROR",
      payload: error.message,
    });
  }
};
