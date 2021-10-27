import React from 'react'

function PageBtn(props) {
  const { totalpages } = props
  const pagecount = () => {
    for (let i = 1; i < totalpages; i++) {
      document.querySelector(
        '.page'
      ).innerHTML += `<p>${i}</p>`
    }
  }
  return (
    <>
      <div className="page-btn-wrap d-flex">
        {/* 前一頁 */}
        <div className="page-pre">
          <i className="fas fa-chevron-left"></i>
        </div>

        {/* 頁數 */}
        {/* {pagecount()} */}
        <div className="page d-flex"></div>

        {/* 下一頁 */}
        <div className="page-next">
          <i className="fas fa-chevron-right"></i>
        </div>
        <p className="total-page">共 {totalpages} 頁</p>
      </div>
    </>
  )
}

export default PageBtn
