import { createSlice } from "@reduxjs/toolkit";
import { resetDestination } from "./destinationSlice";
import { resetReduxOPedia } from "../actions/actions";

const initialState = {count:10}

//el hook createSlice crea un objeto con name, itniialstate y reducers( acciones )
export const counterSlice = createSlice({

    name: "counter",
    initialState: initialState,
    reducers: {
        increment: (state) =>{
            state.count = state.count + 1
        },
        decrement: (state) =>{
            state.count = state.count - 1
        },
        decrementMultiplier: (state,action) =>{
            state.count = state.count - action.payload
        },
        incrementMultiplier: (state,action) =>{
            state.count = state.count + Number(action.payload)
        }
        
    },
    extraReducers:(builder) =>{
        builder.addCase(resetReduxOPedia, (state) =>{
            state.count = 10
        })
    }


})

export const counterReducer = counterSlice.reducer
export const {increment, decrement} = counterSlice.actions
export const {incrementMultiplier,decrementMultiplier} = counterSlice.actions
