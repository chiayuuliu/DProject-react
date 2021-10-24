import React from 'react'

function Filter(props) {
  const { searchWord, setSearchWord } = props
  return (
    <>
      <div className="d-flex pd-search-wrap">
        <button type="button" className="pd-search-icon">
          <i className="fas fa-search "></i>
        </button>
        {/* 關鍵字搜尋 */}
        <input
          type="text"
          className="pd-search-input"
          placeholder="請輸入關鍵字"
          value={searchWord}
          onChange={(e) => setSearchWord(e.target.value)}
        />
      </div>
      {/* 篩選器 */}
      <div className="pd-radio-wrap">
        <input type="radio" name="pd-filter" id="low" />
        <label for="low">低熱量優先</label>
        <br />
        <input type="radio" name="pd-filter" id="hight" />
        <label for="hight">高蛋白優先</label>
        <br />
        <input
          type="radio"
          name="pd-filter"
          id="lowsugar"
        />
        <label for="lowsugar">低醣料理</label>
      </div>
    </>
  )
}
export default Filter
