import { createSlice } from '@reduxjs/toolkit';
import AboutUsImage from '../assets/images/aboutUs/AboutUs.jpg';

const initialState = {
  title: 'ABOUT US',
  firstText: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
  secondText: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
  image: AboutUsImage,
};

const aboutUsSlice = createSlice({
  name: 'aboutUs',
  initialState,
  reducers: {},
});

export const selectTitle = (state) => state.aboutUs.title;
export const selectFirstText = (state) => state.aboutUs.firstText;
export const selectSecondText = (state) => state.aboutUs.secondText;
export const selectImage = (state) => state.aboutUs.image;

export default aboutUsSlice.reducer;
