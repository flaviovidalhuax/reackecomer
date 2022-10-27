import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// import axios, { Axios } from "axios";
// import getConfig from "../../utils/getConfig";


const productsSlice = createSlice({
    name: 'products',
    initialState:null,
    reducers:{
        setProductsGlobal: (state, action)=>
         action.payload, 
         ascendingProducts: state =>{
            state.sort((a,b)=> +a.price - +b.price)
         },
         decendengPrpducts:  state =>{
            state.sort((a,b)=> +b.price - +a.price)
         }
        
    }
})

export const {setProductsGlobal, ascendingProducts, decendengPrpducts } = productsSlice.actions
export default productsSlice.reducer
export const  getAllProductsCart = () => (dispatch) =>{
    const  URL='https://ecommerce-api-react.herokuapp.com/api/v1/products'
    
    return axios.get(URL)
            .then(res => dispatch(setProductsGlobal(res.data.data.products)) )
            .catch(err => console.log(err)) 
}

export const getProductsByCategory = id => (dispatch)=>{
    const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/products?category=${id}`
    return axios.get(URL)
        .then(res => dispatch(setProductsGlobal(res.data.data.products)))
        .catch(err => console.log(err))
} 

/*
const cartSlice = createSlice({
    name: 'cart',
    initialState: null,
    reducers: {
       setCartGlobal: (state, action) => action.payload 
    }
})

export const { setCartGlobal } = cartSlice.actions

export default cartSlice.reducer

export const getAllProductsCart = () => (dispatch) => {
    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart'
    return axios.get(URL, getConfig())
      .then(res => dispatch(setCartGlobal(res.data.data.cart)))
      .catch(err => console.log(err))
}

////////
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const productsSlice = createSlice({
  name: 'products',
  initialState: null,
  reducers: {
    setProductsGlobal: (state, action) => action.payload,
    ascendingProducts: state => {
      state.sort((a, b) => +a.price - +b.price)
    },
    descendingProducts: state => {
      state.sort((a, b) => +b.price - +a.price)
    }
  }
})

export const {setProductsGlobal, ascendingProducts, descendingProducts} = productsSlice.actions

*/