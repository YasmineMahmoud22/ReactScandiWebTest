import { createReducer } from "@reduxjs/toolkit";
import { inistialState } from "./instialState";
import {setCategory} from"../actions/category";

export const categoryReducer =createReducer(inistialState.category,{
    [setCategory]:(state,{payload})=> payload,
})