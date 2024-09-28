import { clearErrors,productFail,productRequest,productSuccess } from "../Reducers/productReducer";
import axios from "axios";
export const getProduct=(search,category,currentPage)=>async(dispatch)=>{
   const skip=(currentPage-1)*15
//    console.log()
    try{
        dispatch(productRequest())
        var url
        if(search){
            url=`https://dummyjson.com/products/search?q=${search}&limit=15&skip=${skip}`
        }else if(category && category!="All"){
            url=`https://dummyjson.com/products/category/${category}?&limit=15&skip=${skip}`
        }else if(!category || category=="All"){
            url=`https://dummyjson.com/products?limit=15&skip=${skip}`
        }
       
        const {data}=await axios.get(url);
        dispatch(productSuccess(data))
    }catch(err){
        dispatch(productFail(err.response.data.message))
    }
}