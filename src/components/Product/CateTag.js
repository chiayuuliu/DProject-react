import React from 'react'

function CateTag(props) {
  const { productCate, setProductCate } = props
  return (
    <>
      <input
        type="radio"
        name="pd-cate"
        id="all"
        value="0"
        checked={productCate === '0'}
        onChange={(e) => {
          setProductCate(e.target.value)
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
        checked={productCate === '1'}
        onChange={(e) => {
          setProductCate(e.target.value)
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
        checked={productCate === '2'}
        onChange={(e) => {
          setProductCate(e.target.value)
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
        checked={productCate === '3'}
        onChange={(e) => {
          setProductCate(e.target.value)
        }}
      />
      <label className="pd-material" htmlFor="material">
        嚴選食材
      </label>
    </>
  )
}

export default CateTag
