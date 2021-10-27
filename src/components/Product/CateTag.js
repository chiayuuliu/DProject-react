import React from 'react'
import {
  BrowserRouter as Router,
  Link,
  withRouter,
} from 'react-router-dom'

function CateTag(props) {
  const { productCate, setProductCate } = props
  return (
    <>
      <input
        type="radio"
        name="pd-cate"
        id="all"
        value="0"
        onClick={(e) => {
          setProductCate(e.target.value)
          props.history.push('./')
        }}
      />
      <label className="pd-all" htmlFor="all">
        全部商品
      </label>

      <input
        type="radio"
        name="pd-cate"
        id="table"
        value="1"
        onClick={(e) => {
          setProductCate(e.target.value)
          props.history.push('./?cate=1')
        }}
      />
      <label className="pd-table" htmlFor="table">
        快速上桌
      </label>

      <input
        type="radio"
        name="pd-cate"
        id="workable"
        value="2"
        onClick={(e) => {
          setProductCate(e.target.value)
          props.history.push('./?cate=2')
        }}
      />
      <label className="pd-workout" htmlFor="workable">
        健身專區
      </label>

      <input
        type="radio"
        name="pd-cate"
        id="material"
        value="3"
        onClick={(e) => {
          setProductCate(e.target.value)
          props.history.push('./?cate=3')
        }}
      />
      <label className="pd-material" htmlFor="material">
        嚴選食材
      </label>
    </>
  )
}

export default withRouter(CateTag)
