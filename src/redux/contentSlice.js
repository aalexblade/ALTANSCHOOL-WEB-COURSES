import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // Приклад структури
  aboutUsText: 'We believe in high-quality web education.',
  organicFashionImg: '/assets/organic-fashion.jpg',
 
};

const contentSlice = createSlice({
  name: 'content',
  initialState,
  reducers: {
    setAboutUsText: (state, action) => {
      state.aboutUsText = action.payload;
    },
    setOrganicFashionImg: (state, action) => {
      state.organicFashionImg = action.payload;
    },
  },
});

export const { setAboutUsText, setOrganicFashionImg } = contentSlice.actions;
export default contentSlice.reducer;
