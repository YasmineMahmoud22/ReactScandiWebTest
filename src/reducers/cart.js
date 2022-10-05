import { inistialState } from "./instialState";
import { createReducer } from "@reduxjs/toolkit";
import { addProduct, decrementProduct, incrementProduct, removeProduct, resetCart } from "../actions/cart";




export const cartReducer= createReducer(inistialState.cart,{
    [addProduct]:((state,{payload})=>[...state,payload]),
    [resetCart]:((state,payload)=>[]),
    [removeProduct]:((state,{payload})=>{
        return state.filter((product)=>product.key !==payload.key)
    }),
    [incrementProduct]:(state,{payload})=>{
        return state.map((product) => {
            return product.key === payload.key
              ? 
              {...product,value: product.value + payload.value}
              : 
              { ...product }
              ;
          });
    },
    [decrementProduct]:((state,{payload})=>{
        return state.map((product)=>{
            return product.key === payload.key?
            {...product,value:product.value-payload.value}
            :
            {...product}
        })
    }),
})
