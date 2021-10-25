// 使用套件
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import React, { useState } from 'react'
// import conf, { API_HOST } from './config'

// 頁面用元件
import ProductDetail from './pages/Product/ProductDetail'
import Products from './pages/Product/Products'
import Customize from './pages/Product/Customize'

// 組合用元件

function App() {
  const [productId, setProductId] = useState('')

  return (
    <Router>
      <>
        <Switch>
          {/* 商品細節頁 */}
          {/*/products/:id */}
          <Route path="/product/:id">
            <ProductDetail
              productId={productId}
              setProductId={setProductId}
            />
          </Route>
          {/* 商品頁 */}
          {/* (TBA)其他頁面路由/cate=1,/cate=2,/cate=3 */}
          <Route path="/products">
            <Products
              productId={productId}
              setProductId={setProductId}
            />
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
