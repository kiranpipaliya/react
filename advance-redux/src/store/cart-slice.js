import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        changes: false,
        items: [],
        totalQuantities: 0,
    },
    reducers: {
        replaceCart(state, action) {
            state.totalQuantities = action.payload.totalQuantities;
            state.items = action.payload.items;
        },
        addItemToCart(state, action) {
            const newItem = action.payload;
            console.log(newItem);
            const exitingItem = state.items.find(item => item.id === newItem.id)
            state.totalQuantities++;
            state.changes = true;
            if (!exitingItem) {
                state.items.push({
                    name: newItem.name,
                    id: newItem.id,
                    price: newItem.price,
                    quantities: 1,
                    totalPrice: newItem.price

                })
            } else {
                exitingItem.quantities++;
                exitingItem.totalPrice = exitingItem.totalPrice + newItem.price
            }

        },
        removeCartItem(state, action) {
            state.totalQuantities--;
            state.changes = true;
            const id = action.payload;
            const exitingItem = state.items.find(item => item.id === id)
            if (exitingItem.quantities === 1) {
                state.items = state.items.filter(item => item.id !== id)
            } else {
                exitingItem.quantities--;
                exitingItem.totalPrice = exitingItem.totalPrice - exitingItem.price;
            }

        }

    }
})


export const cartActions = cartSlice.actions;
export default cartSlice;  