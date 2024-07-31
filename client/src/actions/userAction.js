import axios from "axios";

const fetchUser = async (dispatch) => {
  try {
    dispatch({
      type: "FETCH_USER_REQUEST",
    });
    const [user] = await Promise.all([axios.get(`/api/users`)]);
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

const viewUser = async (dispatch, id) => {
  console.log(id);
  try {
    dispatch({
      type: "VIEW_USER_REQUEST",
    });
    const user = await axios.get(`/api/users/${id}`);
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

const authUser = async (dispatch, user) => {
  const findUser = await axios.post(`/api/users/login`, user);
  if (findUser) {
    dispatch({
      type: "AUTH_USER",
      payload: findUser.data,
    });
  }
  return findUser.data;
};

export { fetchUser, viewUser, authUser };
