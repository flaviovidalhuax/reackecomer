import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import './styles/logInScreen.css'

const LogInScreen = () => {
       const {handleSubmit, register, reset}  =useForm()
       const [isLogged, setIsLogged] = useState(false)
    const submit= (data) => {
        const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/users/login'
        axios.post(URL, data)
            .then(res => {console.log(res.data)
            localStorage.setItem('token',res.data.data.token)
            })
            .catch(err => console.log(err))
           
          }
        
          useEffect(() => {
              if(localStorage.getItem('token')){
                setIsLogged(true)
              } else {
                setIsLogged(false)
              }
            }, [])
          
            const handleLogout = () => {
              localStorage.removeItem('token')
              setIsLogged(false)
            }
            if(isLogged) {
              return (
                <div  className='logInScreen_div-in'>
                  <h2>User Logged ✅</h2>
                  <button className='logInScreen_div-button' onClick={handleLogout}>Logout</button>
                </div>
              )
            }
  return (
    <div className='logInScreen'>
        <form onSubmit={handleSubmit(submit)}>
            <div className='logInScreen_div'>
                <label htmlFor="email">email</label>
                <input type="text" id='email' {...register('email')} />
            </div>
            <div>
                <label htmlFor="password">password</label>
                <input type="password" id='password' {...register('password')}/>
            </div>
            <button>Login</button>

        </form>
    </div>
  )
}

export default LogInScreen


//   const handleLogout = () => {
//     localStorage.removeItem('token')
//     setIsLogged(false)
//   }

//   if(isLogged) {
//     return (
//       <div>
//         <h2>User Logged ✅</h2>
//         <button onClick={handleLogout}>Logout</button>
//       </div>
//     )
//   }