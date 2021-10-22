import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import React, { useState } from 'react'
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
  return (
    <>
      {/* Banner */}
      {/* <AllBanner /> */}
      {/* <MaterialBanner /> */}
      {/* <WorkoutBanner /> */}
      <TableBanner />

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
            <ProductCard />
          </div>

          {/* 頁碼 */}
          <PageBtn />
        </div>
      </div>
    </>
  )
}

export default Products
