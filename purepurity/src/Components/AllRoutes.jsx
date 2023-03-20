import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Products from '../Pages/Products'
import ProductDetails from '../Pages/ProductDetails'
import LoginPage from '../Pages/LoginPage'
import RegisterPage from '../Pages/RegisterPage'
import Private from './Private'
import Cart from '../Pages/Cart'

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={ 
            <Home />
         
        }>
        </Route>
        <Route path='/login' element={<LoginPage />}></Route>
        <Route path='/products' element={
          <Private>
        <Products />
          </Private>

        }></Route>
        <Route path='/products/:id' element={
          <Private>
            <ProductDetails />
          </Private>

        }></Route>
        {/* <Route path='/register' element={<RegisterPage />}></Route> */}
        <Route path='/cart' element={<Cart />}></Route>
      </Routes>
    </div>
  )
}

export default AllRoutes