import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        quantity: 1,
    },
    reducers: {
        increment: (state) => {
            state.quantity += 1;
        },
        decrement: (state) => {
            if (state.quantity > 1) {
                state.quantity -= 1;
            }
        },
    },

});
export const { increment, decrement } = cartSlice.actions;
export default cartSlice.reducer;