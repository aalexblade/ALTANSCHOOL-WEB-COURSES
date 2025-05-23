// src/redux/shopByCategoriesSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  title: 'SHOP BY CATEGORIES',
  images: {
    1: '/src/assets/images/shopByCategories/ShopByCategories1.jpg',
    2: '/src/assets/images/shopByCategories/ShopByCategories2.jpg',
    3: '/src/assets/images/shopByCategories/ShopByCategories3.jpg',
    4: '/src/assets/images/shopByCategories/ShopByCategories4.jpg',
    5: '/src/assets/images/shopByCategories/ShopByCategories5.jpg',
  },
};

const shopByCategoriesSlice = createSlice({
  name: 'shopByCategories',
  initialState,
  reducers: {
    // Якщо потрібно оновлювати стейт, додай тут редюсери
  },
});

export default shopByCategoriesSlice.reducer;
