import { currencyReducer } from "./currency";
import { combineReducers } from "@reduxjs/toolkit";
import { cartReducer } from "./cart";
import { categoryReducer } from "./category";

export const  rootReducer=combineReducers({
    currency:currencyReducer,
    cart:cartReducer,
    category:categoryReducer
})