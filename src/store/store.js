import {configureStore} from "@reduxjs/toolkit";
import converterReducer from './slices/converterSlice';

export const store = configureStore({
    reducer: {
        'converter': converterReducer
    }
})