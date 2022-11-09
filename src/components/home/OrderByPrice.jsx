import React from 'react'
import { useDispatch } from 'react-redux'
import { ascendingProducts, decendengPrpducts } from '../../store/slices/products.slice'
import "./styles/orderByPrice.css";

const OrderByPrice = () => {
    const dispatch= useDispatch()
    
    const handleAscending = () =>{
        dispatch(ascendingProducts())
    }
    const handleDescending = () =>{
        dispatch(decendengPrpducts())
    }
  return (
    <div className='orderByPrice'>
        <h3>Order</h3>
       <div>
       <button onClick={handleAscending} className='order_btn'>Order up</button>
        <button onClick={handleDescending} className='order_btn'>Order down</button>
       </div>
    </div>
  )
}

export default OrderByPrice

