import { configureStore } from '@reduxjs/toolkit';
import { carsReducer } from './slices/cars';
import { authReducer } from './slices/auth';

const store = configureStore({
    reducer: {
        cars: carsReducer,
        auth: authReducer,
    },
});

export default store;