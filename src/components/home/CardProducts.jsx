import axios from 'axios'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getAllProductsCart } from '../../store/slices/products.slice'
import getConfig from '../../utils/getConfig'
import './styles/cardProduct.css'

const CardProducts = ({product}) => {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleNavigation= () =>{
    navigate(`/product/${product.id}`)
  }
  
  const handleAddCart = e =>{
    e.stopPropagation()
    const URL ='https://ecommerce-api-react.herokuapp.com/api/v1/cart'
    const data={
      id:product.id,
      quantity:1,
    }
      axios.post(URL, data, getConfig())
        .then(res => {console.log(res.data)
                      dispatch(getAllProductsCart())
  })
        .catch(err=> console.log(err))
  }

  return (
    <article onClick={handleNavigation} className='product'>
        <header className='product_header'>
            <img className='product_img' src={product.productImgs[0]} alt="imagen" />
        </header>
        <div className='product_body'>
            <h3 className='product_title'>{product.title}</h3>
            <div className='product_price'>
                <span className='product_price-label'>Price</span>
                <p className='product_price-number'>{product.price}</p>
            </div>
         
        </div>
  
        <button onClick={handleAddCart} className='product_icon-container'>
             <i className="product_icon fa-solid fa-cart-shopping"></i>
        </button>

    </article>
  )
}

export default CardProducts