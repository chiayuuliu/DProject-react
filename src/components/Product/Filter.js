import React, { useState, useEffect } from 'react'

function Filter(props) {
  const [input, setInput] = useState('')
  const { searchWord, setSearchWord, filter, setFilter } =
    props

  return (
    <>
      {/* 關鍵字搜尋 */}
      <div className="d-flex pd-search-wrap">
        <div className="pd-search-icon">
          <i className="fas fa-search "></i>
        </div>
        <input
          type="text"
          className="pd-search-input"
          placeholder="請輸入關鍵字"
          value={input}
          // 輸入框狀態改變時設定回值
          onChange={(e) => {
            setInput(e.target.value)
            console.log(e.target.value)
            if (!e.target.value) {
              setSearchWord('')
            }
          }}
          onKeyDown={(e) => {
            // 在輸入框按下enter,再把內容設定回狀態
            if (e.keyCode === 13) {
              setSearchWord(input)
            }
          }}
        />
      </div>
      {/* 熱量篩選器 */}
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
