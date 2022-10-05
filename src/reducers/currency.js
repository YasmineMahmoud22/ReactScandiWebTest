import { sendCurrency } from "../actions/currency";
import { createReducer } from "@reduxjs/toolkit";
import { inistialState } from "./instialState";



export const currencyReducer =createReducer(inistialState.currency,{
    [sendCurrency]:(state,{payload})=> payload,
})