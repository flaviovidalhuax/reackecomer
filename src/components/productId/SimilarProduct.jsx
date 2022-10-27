import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CardProducts from '../home/CardProducts'
import './styles/similarProduct.css'

const SimilarProduct = ({product}) => {
   
    const [categories, setCategories] = useState()
    const [idCategory, setidCategory] = useState()
    const [similarProducts, setSimilarProducts] = useState()
    useEffect(() => {
        const URL ='https://ecommerce-api-react.herokuapp.com/api/v1/products/categories'
        axios.get(URL)
            .then(res => setCategories(res.data.data.categories))
            .catch(err => console.log(err))
    }, [])

    useEffect(() => {
  
        if (categories && product) {
            const cb =category =>category.name===product.category
            setidCategory(categories.filter(cb)[0].id)
        }
    }, [categories, product])

    useEffect(() => {
        if (idCategory) { 
            const URL =`https://ecommerce-api-react.herokuapp.com/api/v1/products?category=${idCategory}`
            axios.get(URL)
                .then(res =>setSimilarProducts(res.data.data.products) )
                .catch(err => console.log(err))
        }
    }, [idCategory])
        console.log(similarProducts);
        console.log(idCategory);
  return (
    <div className='simialrProduct'>
        <h2>Discover similar products</h2>
        <div className='simialrProduct_map'>
            {
            similarProducts?.map(prod => {
                if (product.id !== prod.id) {
                    return <CardProducts id={prod.id}  product={prod} />
                    
                }
            })
            }
        </div>
    </div>
  )
}

export default SimilarProduct