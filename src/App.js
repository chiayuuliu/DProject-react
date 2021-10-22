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
import Customized from './pages/Product/Customized'


// 組合用元件

function App() {
  return (
    <Router>
      <>
        <Switch>
        {/* 商品細節頁 */}
          <Route path="/product-detail">
            <ProductDetail />
          </Route>
          {/* 商品頁 */}
          <Route path="/products">
            <Products />
          </Route>
          {/* 客製化推薦 */}
          <Route path="/client-target">
            <Customized />
          </Route>
        </Switch>
      </>
    </Router>
  )
}

export default App
