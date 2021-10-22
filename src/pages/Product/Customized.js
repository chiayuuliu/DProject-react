import React from 'react'
import ProductCard from './../../components/Product/ProductCard'
function Customized(props) {
  const handleSubmit = (e) => {
    e.stopPropagation()
    console.log(e.currentTarget)
    e.preventDefault()
  }
  return (
    <>
      <div className="pd-client-banner d-flex">
        <div className="pd-target-wrap d-flex col-lg-7 col-md-12">
          <h1>我想要...</h1>
          <form
            className="pd-target d-flex"
            onSubmit={handleSubmit}
          >
            <div className="pd-gain-wrap mlr">
              <button className="pd-gain"></button>
              <p>增肌減脂</p>
            </div>
            <div className="pd-slim-wrap mlr">
              <button className="pd-slim "></button>
              <p>變瘦</p>
            </div>
          </form>
          <h1>我每周運動...</h1>
          <form
            className="pd-target d-flex"
            onSubmit={handleSubmit}
          >
            <div className="pd-five-wrap">
              <button className="pd-five"></button>
              <p>五次以上</p>
            </div>
            <div className="pd-three-wrap">
              <button className="pd-three"></button>
              <p>三次左右</p>
            </div>
            <div className="pd-none-wrap">
              <button className="pd-none"></button>
              <p>不運動</p>
            </div>
          </form>
        </div>
        <div className="pd-client-wrap d-flex col-lg-5 col-md12">
          <div className="pd-client-info d-flex">
            <div>
              <label for="gender">性別</label>
              <select
                className="pd-gender"
                name="gender"
                id="gender"
              >
                <option value="">男</option>
                <option value="">女</option>
              </select>
              <label for="years">年齡</label>
              <input
                type="number"
                name="years"
                value=""
                className="pd-years"
              />
            </div>
            <div>
              <label for="height">身高</label>
              <input
                type="number"
                name="height"
                value=""
                className="pd-height"
              />
              <label for="weight">體重</label>
              <input
                type="number"
                name="weight"
                value=""
                className="pd-weight"
              />
            </div>
          </div>
          <div className="pd-suggest d-flex">
            <p className="dkgreen">每日消耗熱量1500大卡</p>
            <p className="pd-day">建議每日攝取</p>
            <p className="dkgreen">熱量1500大卡</p>
            <p className="dkgreen">蛋白質50克</p>
          </div>
          <button className="pd-client-btn">
            查看飲食推薦
          </button>
        </div>
      </div>
      {/* 推薦區 */}
      <div className="container d-flex pd-sug-wrap">
        <h1>商品推薦</h1>
        <div className="pd-card-wrap d-flex col-12">
          <ProductCard />
        </div>
        <h1>餐盒推薦</h1>
        <h1>文章推薦</h1>
      </div>
    </>
  )
}

export default Customized
