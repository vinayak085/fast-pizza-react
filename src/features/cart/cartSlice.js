import { createSlice } from '@reduxjs/toolkit';

const initialState = {

    cart:[]

    // cart:[
    // {
    //   pizzaId:12,
    //   name:'mediterranean',
    //   quantity:2,
    //   unitPrice:16,
    //   totalPrice:32,
    // }]

};

const cartSlice= createSlice({
    name:'cart',
    initialState,
    reducers:{
        addItem(state,action){
            //payload = newItem
            state.cart.push(action.payload)
        },
        deleteItems(state,action){
            //payload = pizzaId
            state.cart= state.cart.filter((item)=> item.pizzaId !== action.payload)
        },
        increaseItemsQuantity(state,action){
            const item = state.cart.find((item)=> item.pizzaId === action.payload);
            
            item.quantity++;
            item.totalPrice = item.quantity * item.unitPrice   
        },
        decreaseItemsQuantity(state,action){
             const item = state.cart.find((item)=> item.pizzaId === action.payload);
            
            item.quantity--;
            item.totalPrice = item.quantity * item.unitPrice

            if(item.quantity === 0) cartSlice.caseReducers.deleteItems(state,action);
        },
        clearCart(state){
            state.cart=[];
        }
    }
});

export const {addItem,deleteItems,increaseItemsQuantity,decreaseItemsQuantity,clearCart} = cartSlice.actions;

export default cartSlice.reducer;

export const getTotalCartQuantity=(state)=> state.cart.cart.reduce((sum,item)=>sum + item.quantity,0)

export const getTotalCartPrice=(state)=> state.cart.cart.reduce((sum,item)=>sum + item.totalPrice,0)

export const getCart =(state)=> state.cart.cart;

export const getCurrentQuantityById = id => state=>state.cart.cart.find(item=>item.pizzaId === id)?.quantity ?? 0