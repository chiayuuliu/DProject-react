import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import React, { useState } from 'react'
// 組合用元件
// Banner
import AllBanner from './../../components/Product/AllBanner'

function Products(props) {
  return (
    <>
      {/* Banner */}
      <AllBanner />
      <div class="container">
        <div class="row">
          {/* 分類按鈕 */}
          <div class="pd-filter-btn-wrap">
            <div class="pd-cate d-flex mb-80">
              <button class="pd-all">全部商品</button>
              <button class="pd-table">快速上桌</button>
              <button class="pd-workout">健身專區</button>
              <button class="pd-material">嚴選食材</button>
            </div>
            {/* 篩選器 */}
            <div class="pd-filter">
              <form action="" class="d-flex pd-search-wrap">
                <button
                  type="button"
                  class="pd-search-icon"
                >
                  <i class="fas fa-search "></i>
                </button>
                <input
                  type="text"
                  class="pd-search-input"
                  name="search"
                  id="search"
                  placeholder="請輸入關鍵字"
                />
              </form>
              <div class="pd-radio-wrap">
                <input
                  type="radio"
                  name="option"
                  id="low"
                />
                <label for="low">低熱量優先</label>
                <br />
                <input
                  type="radio"
                  name="option"
                  id="hight"
                />
                <label for="hight">高蛋白優先</label>
                {/* 
                考慮移除
                <br />
                <input
                  type="radio"
                  name="option"
                  id="lowsugar"
                />
                <label for="lowsugar">低醣料理</label>
                */}
              </div>
            </div>
          </div>
          <div class="pd-card-wrap d-flex col-md-12 col-lg-9">
            <div class="pd-card d-flex ">
              <div class="pd-img">
                <img
                  src="./../img/專題/product.png"
                  alt=""
                />
              </div>
              <div class="pd-card-intro d-flex">
                <div class="pd-name">雞胸肉沙拉</div>
                <p class="pd-cal">645 Calories</p>
                <p class="pd-price">NT$ 70</p>
                <div class="pd-btn-wrap d-flex">
                  <button class="pd-order-btn">
                    ORDER NOW
                  </button>
                  <div class="pd-love-icon">
                    <i class="far fa-heart"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="page-btn-wrap d-flex">
            <div class="page-pre">
              <i class="fas fa-chevron-left"></i>
            </div>
            <div class="page">1</div>
            <div class="page-next">
              <i class="fas fa-chevron-right"></i>
            </div>
            <p class="total-page">共幾頁</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Products
