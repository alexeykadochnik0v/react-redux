import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
    name: "products",
    initialState: {
        products: [
            { id: 1, name: "Product 1", price: 100, description: 'Описание товара 1' },
            { id: 2, name: "Product 2", price: 200, description: 'Описание товара 2' },
            { id: 3, name: "Product 3", price: 300, description: 'Описание товара 3' },
        ],
        selectedProduct: null,
    },
    reducers: {
        selectProduct: (state, action) => {
            state.selectedProduct = state.products.find(product => product.id === action.payload);
        },
    },

})
export const { selectProduct } = productSlice.actions;
export default productSlice.reducer;