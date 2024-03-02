import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import CartPage from './pages/cartPage'

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/cart" element={<CartPage/>}/>
      </Routes>
    </div>
  )
}

export default App
