import React from 'react'

function Filter(props) {
  return (
    <>
      <form action="" class="d-flex pd-search-wrap">
        <button type="button" class="pd-search-icon">
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
        <input type="radio" name="option" id="low" />
        <label for="low">低熱量優先</label>
        <br />
        <input type="radio" name="option" id="hight" />
        <label for="hight">高蛋白優先</label>
        <br />
        <input type="radio" name="option" id="lowsugar" />
        <label for="lowsugar">低醣料理</label>
      </div>
    </>
  )
}
export default Filter
