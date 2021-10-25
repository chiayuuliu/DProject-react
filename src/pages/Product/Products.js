import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import conf, {
  API_HOST,
  IMG_PATH,
  Product_API,
} from './../../config/config.js'

// 組合用元件
// Banner
import AllBanner from './../../components/Product/AllBanner'
import MaterialBanner from '../../components/Product/MaterialBanner'
import WorkoutBanner from '../../components/Product/WorkoutBanner'
import TableBanner from '../../components/Product/TableBanner'

import CateTag from './../../components/Product/CateTag'
import Filter from './../../components/Product/Filter'
import ProductCard from './../../components/Product/ProductCard'
import PageBtn from './../../components/Product/PageBtn'

function Products(props) {
  const [searchWord, setSearchWord] = useState('')
  const [products, setProducts] = useState([])

  // 總頁數
  const [pages, setPages] = useState(0)

  useEffect(() => {
    ;(async () => {
      const r = await fetch(Product_API)
      const obj = await r.json()
      setProducts(obj.rows)
      setPages(obj.totalPages)
    })()
  }, [])

  // console.log(products.sid)

  return (
    <>
      {/* Banner */}
      <AllBanner />
      {/* <MaterialBanner /> */}
      {/* <WorkoutBanner /> */}
      {/* <TableBanner /> */}

      {/* ---------- */}
      <div className="container">
        <div className="row">
          {/* 分類按鈕 */}
          <div className="pd-filter-btn-wrap">
            <div className="pd-cate d-flex mb-80">
              <CateTag />
            </div>
            {/* 篩選器 */}
            <div className="pd-filter">
              <Filter />
            </div>
          </div>
          {/* ---- */}
          <div className="pd-card-wrap d-flex col-md-12 col-lg-9">
            {/* 商品卡 */}
            {products.map((v, i) => {
              return (
                <ProductCard
                  key={v.sid}
                  sid={v.sid}
                  name={v.name}
                  cal={v.content_cal}
                  price={v.price}
                />
              )
            })}
          </div>

          {/* 頁碼 */}
          <PageBtn pages={pages} />
        </div>
      </div>
    </>
  )
}

export default Products
