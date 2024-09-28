import { createSlice } from "@reduxjs/toolkit";

const product=createSlice({
    name:"products",
    initialState:{},
    reducers:{
        productRequest:(state)=>{
            state.loading=true
        },
        productSuccess:(state,action)=>{
            state.loading=false
            state.product=action.payload.products
            state.productCount=action.payload.total
        },
        productFail:(state,action)=>{
            state.loading=false
            state.error=action.payload
        },
        clearErrors:(state,action)=>{
            state={
                ...state,
                error:null
            }
        },
    }
})

const{actions,reducer}=product
export const {productRequest,productFail,productSuccess,clearErrors}=actions
export default reducer