export const counterReduceer = (state = { data: 0 }, action) => {
  switch (action.type) {
    case "INITIAL_COUNTER":
      return { data: action.payload, loading: true };
    case "ADD":
      return { data: action.payload, loading: false };
    case "SUB":
      return { data: action.payload, loading: false };
    case "COUNTER_ERROR":
      return { data: action.payload, loading: false };
    default:
      return state;
  }
};
