// redux/newCollectionSlice.js
import { createSlice } from '@reduxjs/toolkit';
import newCollection1 from '/src/assets/images/newColection/newColection1.jpg';
import newCollection2 from '/src/assets/images/newColection/newColection2.jpg';
import newCollection3 from '/src/assets/images/newColection/newColection3.jpg';

const initialState = {
  title: 'New Collection',
  text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  images: [newCollection1, newCollection2, newCollection3],
};

const newCollectionSlice = createSlice({
  name: 'newCollection',
  initialState,
  reducers: {},
});

export const selectTitle = (state) => state.newCollection.title;
export const selectText = (state) => state.newCollection.text;
export const selectImages = (state) => state.newCollection.images;

export default newCollectionSlice.reducer;
