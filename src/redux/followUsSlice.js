import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  email: '',
  message: '',
};

const followUsSlice = createSlice({
  name: 'followUs',
  initialState,
  reducers: {
    setName(state, action) {
      state.name = action.payload;
    },
    setEmail(state, action) {
      state.email = action.payload;
    },
    setMessage(state, action) {
      state.message = action.payload;
    },
    resetForm(state) {
      state.name = '';
      state.email = '';
      state.message = '';
    },
  },
});

export const { setName, setEmail, setMessage, resetForm } = followUsSlice.actions;

export default followUsSlice.reducer;
