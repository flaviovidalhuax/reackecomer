import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartdProduct from '../../components/cart/CartdProduct'
import { getAllProductCart, setCartGlobal } from '../../store/slices/cart.slice'
import getConfig from '../../utils/getConfig'
import './styles/card.css'

const Cart = () => {
  const [total, setTotal] = useState(0)
  const cart = useSelector(state => state.cart)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllProductCart())
  }, [])
  console.log(cart);
  const handlePrchase = () => {
    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/purchases'
    const data = {
      street: "Green St. 1456",
      colony: "Southwest",
      zipCode: 12345,
      city: "USA",
      references: "Some references"
    }

    axios.post(URL, data, getConfig())
      .then(res => {
        console.log(res.data)
        dispatch(setCartGlobal(null))
      })
      .catch(err => console.log(err))
      setTotal(0)
  }
  useEffect(() => {
    if (cart) {
      const result= cart.products.reduce((acc, cv)=> {
        return acc + Number(cv.price) * cv.productsInCart.quantity 
      }, 0) 
      setTotal(result)
    }

  }, [cart])
  

  return (
    <div className='cart'>
        <div className='cart_continer'>
          {
            cart?.products.map(product => (

              <CartdProduct
                key={product.id}
                product={product}
              />
            ))
          }
        </div>
        <h2 className='cart_h2-total'>Total:  ${total}.00</h2>
        <button className='cart_h2-button' onClick={handlePrchase}>Buy now!</button>

    </div>
  )
}

export default Cart