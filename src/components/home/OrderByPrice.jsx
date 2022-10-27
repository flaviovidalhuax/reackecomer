import React from 'react'
import { useDispatch } from 'react-redux'
import { ascendingProducts, decendengPrpducts } from '../../store/slices/products.slice'


const OrderByPrice = () => {
    const dispatch= useDispatch()
    const handleAscending = () =>{
        dispatch(ascendingProducts())
    }
    const handleDescending = () =>{
        dispatch(decendengPrpducts())
    }
  return (
    <div>
        <h3>Order</h3>
        <button onClick={handleAscending} className='order_btn'>Order up</button>
        <button onClick={handleDescending}>Order down</button>
    </div>
  )
}

export default OrderByPrice

