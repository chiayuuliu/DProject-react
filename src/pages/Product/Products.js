import {
  BrowserRouter as Router,
  Link,
  withRouter,
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
  // 設定商品sid for 細節頁
  const { productId, setProductId } = props
  // 所有商品
  const [products, setProducts] = useState([])
  // 篩選後商品
  const [displayProducts, setDisplayProducts] = useState([])
  // 關鍵字搜尋狀態
  const [searchWord, setSearchWord] = useState('')
  // 商品分類標籤(radio)
  const [productCate, setProductCate] = useState('0')
  // 總頁數
  const [totalpages, setTotalPages] = useState('')
  // 設定目前頁數狀態
  const [page, setPage] = useState('1')

  // 要所有資料
  useEffect(() => {
    ;(async () => {
      const r = await fetch(
        `${Product_API}` + `${props.location.search}`
      )
      const obj = await r.json()
      setProducts(obj.rows)
      setDisplayProducts(obj.rows)
      setTotalPages(obj.totalPages)
      console.log('fetch2')
    })()
  }, [page])

  // 關鍵字搜尋
  const handleSearch = (products, searchWord) => {
    let newProducts = []

    if (searchWord) {
      newProducts = products.filter((value) => {
        return value.name.includes(searchWord)
      })
    } else {
      newProducts = [...products]
    }
    return newProducts
  }

  // 商品分類按鈕搜尋
  const handleCate = (products, productCate) => {
    let newProducts = []
    if (parseInt(productCate) !== 0) {
      newProducts = products.filter((value) => {
        return value.cate_id === parseInt(productCate)
      })
    } else {
      newProducts = [...products]
    }
    return newProducts
  }

  // 篩選器有變動時,重新設定商品列表
  useEffect(() => {
    let newProducts = []

    newProducts = handleSearch(products, searchWord)

    newProducts = handleCate(newProducts, productCate)

    setDisplayProducts(newProducts)
  }, [searchWord, productCate])

  // 切換banner
  const All = <AllBanner />
  const Table = <TableBanner />
  const Workout = <WorkoutBanner />
  const Material = <MaterialBanner />

  const switchBanner = (productCate) => {
    switch (productCate) {
      // console.log('ok')
      case '0':
        return All
      case '1':
        return Table
      case '2':
        return Workout
      case '3':
        return Material
      default:
        return All
    }
  }

  return (
    <>
      {/* ----------Banner 元件區-------- */}
      {/* <AllBanner /> */}
      {/* <MaterialBanner /> */}
      {/* <WorkoutBanner /> */}
      {/* <TableBanner /> */}
      <>{switchBanner(productCate)}</>

      {/* ---------- */}
      <div className="container">
        <div className="row">
          {/* 分類按鈕 */}
          <div className="pd-filter-btn-wrap">
            <div className="pd-cate d-flex mb-80">
              <CateTag
                productCate={productCate}
                setProductCate={setProductCate}
              />
            </div>
            {/* 篩選器(關鍵字搜尋/熱量篩選) */}
            <div className="pd-filter">
              <Filter
                searchWord={searchWord}
                setSearchWord={setSearchWord}
              />
            </div>
          </div>
          {/* ---- */}
          <div className="pd-card-wrap d-flex col-md-12 col-lg-9">
            {/* 商品卡 */}
            {displayProducts.map((v, i) => {
              return (
                <ProductCard
                  setProductId={setProductId}
                  key={v.sid}
                  sid={v.sid}
                  img={v.product_img}
                  name={v.name}
                  cal={v.content_cal}
                  price={v.price}
                />
              )
            })}
          </div>

          {/* 頁碼 */}
          <PageBtn totalpages={totalpages} />
          <Link
            to="?page=2"
            onClick={(e) => {
              console.log('page2')
              setPage(2)
            }}
          >
            <p>第二頁</p>
          </Link>
        </div>
      </div>
    </>
  )
}

export default withRouter(Products)
