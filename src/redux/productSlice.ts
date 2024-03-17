import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from './store';

interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    image: string;
    quantity: number;
}

interface ProductsState {
    loading: boolean;
    error: string | null;
    products: Product[];
    totalPrice: number
}

const initialState: ProductsState = {
    loading: false,
    error: null,
    products: [],
    totalPrice: 0,
};

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        fetchProductsStart(state) {
            state.loading = true;
            state.error = null;
        },
        fetchProductsSuccess(state, action: PayloadAction<Product[]>) {
            state.loading = false;
            state.error = null;
            state.products = action.payload.map(product => ({ ...product, quantity: 1 }));
            state.totalPrice = state.products.reduce((acc, product) => acc + product.price * product.quantity, 0);
        },
        fetchProductsFailure(state, action: PayloadAction<string>) {
            state.loading = false;
            state.error = action.payload;
        },
        incrementQuantity(state, action: PayloadAction<number>) {
            const product = state.products.find(product => product.id === action.payload);
            if (product && product.quantity < 10) {
                product.quantity++;
                state.totalPrice += product.price;
            }
        },

        decrementQuantity(state, action: PayloadAction<number>) {
            const product = state.products.find(product => product.id === action.payload);
            if (product && product.quantity > 1) {
                product.quantity--;
                state.totalPrice -= product.price;
            }
        },

        deleteProduct(state, action: PayloadAction<number>) {
            const deletedProduct = state.products.find(product => product.id === action.payload);
            if (deletedProduct) {
                state.products = state.products.filter(product => product.id !== action.payload);
                state.totalPrice -= deletedProduct.price * deletedProduct.quantity;
            }
        },


    },
});

export const { fetchProductsStart, fetchProductsSuccess, fetchProductsFailure,deleteProduct,incrementQuantity,decrementQuantity } = productsSlice.actions;

export default productsSlice.reducer;

export const fetchProducts = (): AppThunk => async dispatch => {
    try {
        dispatch(fetchProductsStart());
        const response = await fetch('https://fakestoreapi.com/products?limit=5');
        const data = await response.json();
        dispatch(fetchProductsSuccess(data));
    } catch (error: any) {
        dispatch(fetchProductsFailure(error.message));
    }
};