import { createAction } from "@reduxjs/toolkit";
export const resetCart =createAction('cart/resetCart')

export const addProduct = createAction('product/addProduct');
export const removeProduct = createAction('product/removeProduct');
export const incrementProduct = createAction('product/incrementProduct');
export const decrementProduct = createAction('product/decrementProduct');



  
