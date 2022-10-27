import React from 'react'
import cartSlice from '../../store/slices/cart.slice'
import cardPurchase from './styles/cardPurchase.css'

const CardPurchase = ({purchase }) => {

  return (
    <article className='purchase' style={{border:'1px solid blueviolet', marginBottom: '20px'}}>
      <header className='purchase_header'>
        <h2 className='purchase_h2'>History's purchase</h2>
        {purchase.updatedAt}
      </header>
      <div className='purchase_div'>
        {
          purchase.cart.products.map(product => (
            <section className='purchase_div-section' key={product.id}>
                  
              <h3>{product.title}</h3>
              <div><span>cuantity: </span>{product.productsInCart.quantity}</div>
              <div><span>price: </span>${product.price}</div>
              
            </section>
          ))
        }
      </div>
    </article>
  )
}

export default CardPurchase