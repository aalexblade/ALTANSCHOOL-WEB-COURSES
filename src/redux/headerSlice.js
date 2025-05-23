// src/redux/headerSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  title: 'ALTANSCHOOL WEB COURSES',
  menuItems: [
    { id: 1, label: 'HOME' },
    { id: 2, label: 'ABOUT' },
    { id: 3, label: 'SHOP' },
    { id: 4, label: 'BLOG' },
    { id: 5, label: 'CONTACT' },
  ],
};

const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {},
});

export const selectMenuItems = (state) => state.header.menuItems;
export const selectTitle = (state) => state.header.title;

export default headerSlice.reducer;
