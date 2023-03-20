import React from 'react'
import AllRoutes from './Components/AllRoutes'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Footer from './Components/Footer'
// import "./styles.css";
import "swiper/css/bundle";
import CartAmountToggle from './Components/CartAmountToggle'
import Cart from './Pages/Cart'

const App = () => {
  return (
    <div>
 
      <Navbar/>
      <AllRoutes/>
      <Footer/>
    </div>
  )
}

export default App