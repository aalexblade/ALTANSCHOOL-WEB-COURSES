import { configureStore } from '@reduxjs/toolkit';
import organicFashionReducer from './organicFashionSlice';
import headerReducer from './headerSlice';
import shopByCategoriesReducer from './shopByCategoriesSlice';
import newCollectionReducer from './newCollectionSlice';
import aboutUsReducer from './aboutUsSlice';
import followUsReducer from './followUsSlice';  

export const store = configureStore({
  reducer: {
    header: headerReducer,
    organicFashion: organicFashionReducer,
    shopByCategories: shopByCategoriesReducer,
    newCollection: newCollectionReducer,
    aboutUs: aboutUsReducer,
    followUs: followUsReducer,  
  },
});

export default store;
