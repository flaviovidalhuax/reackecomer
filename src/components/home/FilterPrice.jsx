import React from 'react'
import './styles/filterPrice.css'

const FilterPrice = ({setfilterByPrice}) => {

  const handleSubmit = e => {
    e.preventDefault()
    const from = +e.target.from.value
    const to = +e.target.to.value
    const obj = {
      from: from,
      to: to !== 0 ? to : Infinity
    }
    setfilterByPrice(obj)
  }

  return (
<form className='fliterPrice' onSubmit={handleSubmit}>
      <h3 className='fliterPrice_h3'>Price</h3>
      <div>
        <label htmlFor="from">From</label>
        <input placeholder='put a number' type="number" id='from' />
      </div>
      <div>
        <label htmlFor="to">To</label>
        <input placeholder='put a number' type="number" id='to' />
      </div>
      <button className='filter-price_btn'>filter</button>
    </form>
  )
}

export default FilterPrice

/*
import React from 'react'

const FilterPrice = ({setFilterByPrice}) => {

  const handleSubmit = e => {
    e.preventDefault()
    const from = +e.target.from.value
    const to = +e.target.to.value
    const obj = {
      from: from,
      to: to !== 0 ? to : Infinity
    }
    setFilterByPrice(obj)
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Price</h3>
      <div>
        <label htmlFor="from">From</label>
        <input type="number" id='from' />
      </div>
      <div>
        <label htmlFor="to">To</label>
        <input type="number" id='to' />
      </div>
      <button className='filter-price__btn'>Filter</button>
    </form>
  )
}

export default FilterPrice
*/