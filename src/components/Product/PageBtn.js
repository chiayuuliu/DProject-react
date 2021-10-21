import React from 'react'

function PageBtn(props) {
  return (
    <>
      <div class="page-btn-wrap d-flex">
        <div class="page-pre">
          <i class="fas fa-chevron-left"></i>
        </div>
        <div class="page">1</div>
        <div class="page-next">
          <i class="fas fa-chevron-right"></i>
        </div>
        <p class="total-page">共幾頁</p>
      </div>
    </>
  )
}

export default PageBtn
