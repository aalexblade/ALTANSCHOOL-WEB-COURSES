import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  title: 'ORGANIC FASHION',
  text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
  when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
  buttonText: 'SHOP NOW',
  images: {
    sm: '/src/assets/images/organicFashion/ORGANIC_375.jpg',
    md: '/src/assets/images/organicFashion/ORGANIC_992.jpg',
    lg: '/src/assets/images/organicFashion/ORGANIC_1366.jpg',
    xl: '/src/assets/images/organicFashion/ORGANIC_1920.jpg',
  },
  
};

const organicFashionSlice = createSlice({
  name: 'organicFashion',
  initialState,
  reducers: {}
});

export default organicFashionSlice.reducer;


