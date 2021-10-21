// 使用套件
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
// import React, { useState } from 'react'

// 頁面用元件
import ProductDetail from './pages/Product/ProductDetail'
import Products from './pages/Product/Products'

// 組合用元件

function App() {
  return (
    <Router>
      <>
        <Switch>
          <Route path="/product-detail">
            <ProductDetail />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
        </Switch>
      </>
    </Router>
  )
}

export default App
