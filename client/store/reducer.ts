export const initialState = {
  comment: "hello world!"
};

export const reducer = (state = {}, action) => {
  if (typeof action === "function") {
    return { ...state, ...action(state) };
  }
  return state;
};
