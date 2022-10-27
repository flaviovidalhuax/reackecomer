import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getAllProductsCart, getProductsByCategory } from '../../store/slices/products.slice'
import './styles/filterCategory.css'
const FilterCategory = () => {

    const [categories, setCategories] = useState()
        useEffect(() => {
        const URL ='https://ecommerce-api-react.herokuapp.com/api/v1/products/categories'
            axios.get(URL)
            .then(res =>setCategories(res.data.data.categories))
            .catch(err => console.log(err))

        }, [])
        console.log(categories);
        const dispatch = useDispatch()
        const handleFetcgCategory = id =>{
            if (id) {
                //filtrar por categorias
                dispatch(getProductsByCategory(id))

            }else{
                //peticion de todos los productos
                dispatch(getAllProductsCart())
            }
        }

  return (
   <article className='filterCategory'>
    <h3 className='filterCategory_h3'>Category</h3>
        <ul>
            <li className='filterCategory_li' 
             onClick={()=>handleFetcgCategory()}>All products</li>
            {
            categories?.map(category => (
                <li className='filterCategory_li'
                    key={category.id}
                    onClick={() => handleFetcgCategory(category.id)}
                >
                    {category.name}
                </li>
            ))
            }      
        </ul>
   </article>
  )
}

export default FilterCategory