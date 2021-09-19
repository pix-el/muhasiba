import { configureStore } from '@reduxjs/toolkit';
import reflectionsReducer from '../ducks/reflectionSlice';

export default configureStore({
    reducer: {
        reflections: reflectionsReducer,
    }
});