import React from 'react'
import { Link, withRouter } from 'react-router-dom'

function PageBtn(props) {
  const { totalpages, nowpage, setNowPage } = props
  // 把頁數轉換成陣列
  const page = []
  for (let i = 1; i <= totalpages; i++) {
    page.push(i)
  }
  // 解析路徑上的分類號
  const searchCateParams = new URLSearchParams(
    props.location.search
  )
  // 取的分類號,關鍵字搜尋會是null
  const searchCate = searchCateParams.get('cate')
  const searchKeyword = searchCateParams.get('keyword')

  // console.log(searchKeyword)
  return (
    <>
      <div className="page-btn-wrap d-flex">
        {/* 前一頁 */}
        <div
          className="page-pre"
          onClick={() => {
            if (nowpage > 1)
              setNowPage(parseInt(nowpage) - 1)
            console.log('前一頁', nowpage)
            props.history.push(
              `?cate=${searchCate}` + '&page=' + nowpage
            )
          }}
        >
          <i className="fas fa-chevron-left"></i>
        </div>
        {/* 頁數 */}
        <div className="page d-flex">
          {/* 把頁數map出來, click同時設定頁數狀態 */}
          {page.map((v, i) => {
            {/* 如果有分類搜尋 */}
            const usp = new URLSearchParams({'page': v});



            if(searchCate){
              return (
              <div key={i}>
                <Link
                  to={`?cate=${searchCate}&` + 'page=' + v}
                  onClick={(e) => {
                    setNowPage(v)
                    console.log('nopage', v)
                  }}
                >
                  {v}
                </Link>
              </div>
            )
            }//如果有關鍵字的話, 頁數的變化
            if(searchKeyword){
              return (
              <div key={i}>
                <Link
                  to={`?keyword=${searchKeyword}&` + 'page=' + v}
                  onClick={(e) => {
                    setNowPage(v)
                  }}
                >
                  {v}
                </Link>
              </div>
            )
            }
            
          })}
        </div>
        {/* 下一頁 */}
        <div
          className="page-next"
          onClick={() => {
            if (nowpage < totalpages)
              setNowPage(parseInt(nowpage) + 1)
            props.history.push(
              `?cate=${searchCate}` + '&page=' + nowpage
            )
          }}
        >
          <i className="fas fa-chevron-right"></i>
        </div>
        <p className="total-page">共 {totalpages} 頁</p>
      </div>
    </>
  )
}

export default withRouter(PageBtn)
