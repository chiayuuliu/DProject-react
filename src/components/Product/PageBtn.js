import React from 'react'
import { Link, withRouter } from 'react-router-dom'

function PageBtn(props) {
  const { totalpages, setNowPage } = props
  // 把頁數轉換成陣列
  const page = []
  for (let i = 1; i <= totalpages; i++) {
    page.push(i)
  }

  return (
    <>
      <div className="page-btn-wrap d-flex">
        {/* 前一頁 */}
        <div className="page-pre">
          <i className="fas fa-chevron-left"></i>
        </div>

        {/* 頁數 */}

        <div className="page d-flex">
          {/* 把頁數map出來, click同時設定頁數 */}
          {page.map((v, i) => {
            return (
              <div key={i}>
                <Link
                  to={'?page=' + v}
                  onClick={(e) => {
                    setNowPage(v)
                  }}
                >
                  {v}
                </Link>
              </div>
            )
          })}
        </div>
        {/* <Link className="page d-flex"></Link> */}

        {/* 下一頁 */}
        <div className="page-next">
          <i className="fas fa-chevron-right"></i>
        </div>
        <p className="total-page">共 {totalpages} 頁</p>
      </div>
    </>
  )
}

export default withRouter(PageBtn)
