const { createSlice } = require("@reduxjs/toolkit");
const initialState = {
  contentComments: [],
};
const commentSlice = createSlice({
  name: "commentSlice",
  initialState,
  reducers: {
    setContentComments: (state, action) => {},
  },
});

export const { setContentComments } = commentSlice.actions;
export default commentSlice.reducer;
