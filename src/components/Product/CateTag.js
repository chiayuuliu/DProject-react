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
      <label class="pd-all" for="all">
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
      <label class="pd-table" for="table">
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
      <label class="pd-workout" for="workable">
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
      <label class="pd-material" for="material">
        嚴選食材
      </label>
    </>
  )
}

export default CateTag
