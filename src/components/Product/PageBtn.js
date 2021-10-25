import React from 'react'

function PageBtn(props) {
  const { pages } = props
  return (
    <>
      <div className="page-btn-wrap d-flex">
        {/* 前一頁 */}
        <div className="page-pre">
          <i className="fas fa-chevron-left"></i>
        </div>
        {/* 頁數 */}
        {/* <>{for(i=1;i<pages; i++)} */}
        <div className="page">1</div>
        {/* 下一頁 */}
        <div className="page-next">
          <i className="fas fa-chevron-right"></i>
        </div>
        <p className="total-page">共 {pages} 頁</p>
      </div>
    </>
  )
}

export default PageBtn
