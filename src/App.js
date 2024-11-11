import React from 'react'
import Navigation from './customer/components/Navigation/Navigation'
import HomePage from './customer/Pages/HomePage/HomePage'
import Footer from './customer/components/Footer/Footer'
import Product from './customer/components/Product/Product'
const App = () => {
  return (
    <div>
      <Navigation />
      <div>
        {/* <HomePage /> */}
        <Product />
      </div>
      <Footer />
    </div>
  )
}

export default App
