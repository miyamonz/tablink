export const initialState = {
  tags: ["doing", "done"]
};

export const reducer = (state = {}, action) => {
  if (typeof action === "function") {
    return { ...state, ...action(state) };
  }
  return state;
};
