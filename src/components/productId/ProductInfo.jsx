import axios from 'axios'
import React, { useState } from 'react'
import getConfig from '../../utils/getConfig'
// import productsSlice from '../../store/slices/products.slice'
import './styles/productInfo.css'
const ProductInfo = ({product}) => {

        const [counter, setCouter] = useState(1)
        const handleMinus = () =>{
            if (counter-1 > 0) {
                setCouter(counter-1)
            }
        }
        const handlePlus = () =>{
            setCouter(counter+1)
        }
        const handleAddCard= ()=>{
            const URL ='https://ecommerce-api-react.herokuapp.com/api/v1/cart'
            const data ={
            id: product.id,
            quantity: counter
            }
            axios.post(URL , data, getConfig())
                .then( res => console.log(res.data))
                .catch(err => console.log(err))
        }

  return (
    <article  className='product-info'>
        <h2 className='product-info_tilte'>{product?.title}</h2>
        <p className='product-info_description'>{product?.description}</p>
        <footer className='product-info_footer'>
            <div className='product-info_footer-container'>
                <h3 className='product-info_price-label'>Price:</h3>
                <span className='product-info_price-number'> {product?.price}</span>
            </div>
            <div className='product-info_cuantity-container'>
                <h3 className='product-info_quantity-label'>Quantity:</h3>
                <div className='counter'>
                    <button onClick={handleMinus} className='counter_minus'> - </button>
                    <button className='counter_number'> {counter} </button>
                    <button onClick={handlePlus} className='counter_plus'> + </button>
                </div>
                <button onClick={handleAddCard}
                 className='product-info_btn'>
                    Add to Cart
                <i className="product_info_icon fa-solid fa-cart-shopping"></i>
                </button>
            </div>
        </footer>
    </article>
  )
}

export default ProductInfo