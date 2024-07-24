export const userListReducer = (state = {}, action) => {
  switch (action.type) {
    case "FETCH_USER_REQUEST":
      return { loading: true, users: [] };
    case "FETCH_USER":
      return { loading: false, users: action.payload };
    case "FETCH_USER_ERROR":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const viewUserReducer = (state = {}, action) => {
  switch (action.type) {
    case "VIEW_USER_REQUEST":
      return { loading: true, user: {} };
    case "VIEW_USER":
      return { loading: false, user: action.payload };
    case "VIEW_USER_ERROR":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
