
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import productsReducer from './productSlice';

export const store = configureStore({
    reducer: {
        products: productsReducer,
        // Другие редукторы могут быть добавлены здесь
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;