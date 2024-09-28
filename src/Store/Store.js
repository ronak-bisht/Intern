import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../Reducers/productReducer";

const store=configureStore({
    reducer:{
        products:productReducer,
       
    },
    devTools:import.meta.env.MODE==='production'?false:true
})

export default store