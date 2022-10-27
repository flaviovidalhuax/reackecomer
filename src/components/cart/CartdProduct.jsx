import axios from 'axios'
import React from 'react'
import { useDispatch } from 'react-redux'
import { getAllProductCart } from '../../store/slices/cart.slice'
import getConfig from '../../utils/getConfig'
import './style/CartProduct.css'

const CartdProduct = ({product}) => {
    const dispatch =useDispatch()

    const  handleDelete =() =>{
        const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/cart/${product.id}`
        axios.delete(URL, getConfig())
            .then( res => {
                console.log(res.data)
                dispatch(getAllProductCart())
            })
            .catch(err => console.log(err))
    }


  return (
    <article className='cart_buynow'>
        <h2 className='cart_buynow-h2'>{product.title}</h2>
        <ul className='cart_buynow-ul'>
            <li>Price: <span className='cart_buynow-span'>{product.price}</span></li>
            <li>Quantity: <span className='cart_buynow-span'>{product.productsInCart.quantity}</span></li>
        </ul>
        <div className='cart_buynow-container-btn'>
                <button onClick={handleDelete} className='cart_buynow-btn'>
                    <i className="cart-p__icon fa-regular fa-trash-can"></i>
                </button>
        </div>
    </article>
  )
}

export default CartdProduct