import React from 'react'

function CateTag(props) {
  return (
    <>
      <input type="radio" name="pd-cate" id="all" />
      <label class="pd-all" for="all">
        全部商品
      </label>

      <input type="radio" name="pd-cate" id="table" />
      <label class="pd-table" for="table">
        快速上桌
      </label>

      <input type="radio" name="pd-cate" id="workable" />
      <label class="pd-workout" for="workable">
        健身專區
      </label>

      <input type="radio" name="pd-cate" id="material" />
      <label class="pd-material" for="material">
        嚴選食材
      </label>
    </>
  )
}

export default CateTag
