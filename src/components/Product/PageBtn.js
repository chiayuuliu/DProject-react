import React from 'react'

function PageBtn(props) {
  return (
    <>
      <div className="page-btn-wrap d-flex">
        <div className="page-pre">
          <i className="fas fa-chevron-left"></i>
        </div>
        <div className="page">1</div>
        <div className="page-next">
          <i className="fas fa-chevron-right"></i>
        </div>
        <p className="total-page">共幾頁</p>
      </div>
    </>
  )
}

export default PageBtn
