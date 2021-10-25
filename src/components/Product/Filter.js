import React from 'react'

function Filter(props) {
  const { searchWord, setSearchWord } = props
  const { filter, setFilter } = props

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
        <input
          type="radio"
          name="pd-filter"
          id="low"
          value="低熱量"
          checked={filter === '低熱量'}
          onChange={(e) => {
            setFilter(e.target.value)
          }}
        />
        <label htmlFor="low">低熱量優先</label>
        <br />
        {/* 高蛋白 */}
        <input
          type="radio"
          name="pd-filter"
          id="hight"
          value="高蛋白"
          checked={filter === '高蛋白'}
          onChange={(e) => {
            setFilter(e.target.value)
          }}
        />
        <label htmlFor="hight">高蛋白優先</label>
        <br />
        {/* 低醣 */}
        <input
          type="radio"
          name="pd-filter"
          id="lowsugar"
          value="低醣"
          checked={filter === '低醣'}
          onChange={(e) => {
            setFilter(e.target.value)
          }}
        />
        <label htmlFor="lowsugar">低醣料理</label>
      </div>
    </>
  )
}
export default Filter
