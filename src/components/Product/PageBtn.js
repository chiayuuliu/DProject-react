import React from 'react'

function PageBtn(props) {
  const { pages } = props
  // const pagebtn = []
  // let i =0
  // for (i = 1; i < pages; i++) {
  //   pagebtn.push(i)
  // }
  return (
    <>
      <div className="page-btn-wrap d-flex">
        {/* 前一頁 */}
        <div className="page-pre">
          <i className="fas fa-chevron-left"></i>
        </div>

        {/* 頁數 */}
        {/* {pagebtn.map((v) => {
          for (i = 1; i < v; i++) {
            console.log(v)
            return <div className="page">{i}</div>
          }
        })} */}
        <div className="page">1</div>
        {/* <div className="page">1</div> */}


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
