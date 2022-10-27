import React from 'react'

const InputSearch = ({setInputText, inputText }) => {
    const handleChange = e => {
        setInputText(e.target.value)
      }

  return (
    <input className='inputSearch' value={inputText} onChange={handleChange} type="text" placeholder='find your product'/>
  )
}

export default InputSearch
