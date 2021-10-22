import React from 'react'

function Filter(props) {
  return (
    <>
      <form action="" className="d-flex pd-search-wrap">
        <button type="button" className="pd-search-icon">
          <i className="fas fa-search "></i>
        </button>
        <input
          type="text"
          className="pd-search-input"
          name="search"
          id="search"
          placeholder="請輸入關鍵字"
        />
      </form>
      <div className="pd-radio-wrap">
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
