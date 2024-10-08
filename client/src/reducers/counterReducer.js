export const counterReduceer = (state = { data: 0 }, action) => {
  switch (action.type) {
    case "INITIAL_COUNTER":
      return { data: action.payload, load: true };
    case "ADD":
      return { data: action.payload, load: false };
    case "SUB":
      return { data: action.payload, load: false };
    case "COUNTER_ERROR":
      return { data: action.payload, load: false };
    default:
      return state;
  }
};
