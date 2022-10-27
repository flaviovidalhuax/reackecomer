import './App.css'
import './assets/pages/Home'
import ProtectedRoutes from './assets/pages/ProtectedRoutes'
import Cart from './assets/pages/Cart'
import Purchases from './assets/pages/Purchases'
import ProductId from './assets/pages/ProductId'
import { Route, Routes } from 'react-router-dom'
import Home from './assets/pages/Home'
// import axios from 'axios'
import LogInScreen from './assets/pages/LogInScreen'
// import { useEffect } from 'react'
import Header from '../src/components/shared/Header'


function App() {

    // useEffect(() => {
    //     const URL ='https://ecommerce-api-react.herokuapp.com/api/v1/users'
    //     const data = {
    //       firstName: 'Flavio',
    //       lastName: 'Hernandez',
    //       email: 'flaviovidalhuax@gmail.com',
    //       password: 'pass1234',
    //       phone: '1234567891',
    //       role: 'admin'
    //     }
    //     axios.post(URL, data)
    //       .then(res => console.log(res.data))
    //       .catch(err => console.log(err))
    // }, [])
//useEffect(() => { //para saver lo que esta en el storage
  {
    //   const URL ='https://ecommerce-api-react.herokuapp.com/api/v1/cart'
  //   const config={
  //     headers:{
  //       Authorization:`Bearer ${localStorage.getItem('token')}`
  //     }
  //   }
  //   axios.get(URL, getConfig())
  //     .then(res => console.log(res))
  //     .catch(err => console.log(err))
  // }, [])

  }

  return (
    <div className="App">
   
          <Header />
     <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/product/:id' element={<ProductId />}/>
        <Route path='/login' element={<LogInScreen />}/>
        <Route element={<ProtectedRoutes />}>
            <Route path='/cart' element={<Cart />}/>
            <Route path='/purchases' element={<Purchases />}/>
  
        </Route>
       
     
     </Routes>
   
    </div>
  )
}

export default App
