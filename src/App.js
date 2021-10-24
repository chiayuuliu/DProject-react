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
import Customize from './pages/Product/Customize'

// 組合用元件

function App() {
  return (
    <Router>
      <>
        <Switch>
          {/* 商品細節頁 */}
          {/* 實際路由/products/:id */}
          <Route path="/product-detail">
            <ProductDetail />
          </Route>
          {/* 商品頁 */}
          {/* (TBA)其他頁面路由/cate=1,/cate=2,/cate=3 */}
          <Route path="/products">
            <Products />
          </Route>
          {/* 客製化推薦 */}
          {/* 選不同的路由要變??? */}
          <Route path="/customize">
            <Customize />
          </Route>
        </Switch>
      </>
    </Router>
  )
}

export default App
