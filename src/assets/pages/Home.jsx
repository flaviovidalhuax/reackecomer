
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CardProducts from '../../components/home/CardProducts'
import FilterCategory from '../../components/home/FilterCategory'
import FilterPrice from '../../components/home/FilterPrice'
import InputSearch from '../../components/home/InputSearch'
import OrderByPrice from '../../components/home/OrderByPrice'
import { getAllProductsCart } from '../../store/slices/products.slice'
import './styles/home.css'

const home = () => {
    const [inputText, setInputText] = useState('')
    const [filterByText, setFilterByText] = useState()
    const [filterByPrice, setfilterByPrice] = useState({
      from:0, 
      to: Infinity
    })

    const products = useSelector( state => state.products)
    const dispatch = useDispatch()

    useEffect(() => {
            dispatch(getAllProductsCart())
    }, [])
  
    useEffect(() => {
        if (inputText !== '' && products) {
            const cb = product => product.title.toLowerCase().includes(inputText.toLowerCase().trim()) 
            setFilterByText(products.filter(cb))
        }else {
            setFilterByText(products)
        }
    }, [inputText, products])

  const callBackFilterPrice= product =>{
      return +product.price > filterByPrice.from && +product.price <=filterByPrice.to
  } 
    
  return (
    <main className='home'>
        
        
        <FilterCategory/> 
        <FilterPrice  setfilterByPrice={setfilterByPrice}/>
        <OrderByPrice />
        <InputSearch 
        setInputText={setInputText}
        InputSearch={inputText}/>
        <div className='home_container'>
            {
                filterByText?.filter(callBackFilterPrice).map(product =>(
                    <CardProducts
                    key={product.id}
                    product={product}
                    />
                ))
            }
        </div>
            
    </main>
  )
}

export default home

/*
import React from 'react'

const InputSearch = ({inputText, setInputText}) => {

  const handleChange = e => {
    setInputText(e.target.value)
  }

  return (
    <input value={inputText} onChange={handleChange} type="text" />
  )
}

export default InputSearch
*/