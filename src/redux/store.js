import {configureStore} from "@reduxjs/toolkit"
import {counterReducer} from "./slices/counterSlice"
import { destinationReducer, destinationSlice } from "./slices/destinationSlice"


export const store = configureStore({
    reducer:{
        counterStore : counterReducer,
        destinationStore : destinationReducer
    }
})

console.log(store.getState())