import React from 'react'

const ProductWrap = (props) => {
  return (
    <>
      <div className="dt-product-imgwrap col-lg-6">
        <div className="dt-bgimg">
          <img src="" alt="" />
        </div>
        <div className="dtmb-love-icon">
          <i className="far fa-heart"></i>
        </div>
      </div>

      <div className="dt-intro-wrap col-sm-12 col-lg-6">
        <div className="dt-name fs44 mb20 d-flex">
          雞胸肉沙拉
          <div className="dt-love-icon">
            <i className="far fa-heart"></i>
          </div>
        </div>
        <p className="dt-intro fs24 mb20">
          含有優質蛋白質卻有極低脂肪的雞胸肉是健身族群最經典的選擇。
        </p>
        <div className="dt-content-wrap d-flex">
          <div className="content-wrap">
            <p className="fs24">熱量:645大卡</p>
            <p className="fs24">蛋白質:65克</p>
            <p className="fs24">脂肪:65克</p>
            <p className="fs24">碳水:100克</p>
          </div>
          <h1 className="dt-price">NT$70</h1>
        </div>
        <div className="dt-btn-wrap d-flex">
          <div className="dt-qty-wrap d-flex ">
            <button className="dt-minus">
              <i className="fas fa-minus"></i>
            </button>
            <div className="dt-qty">1</div>
            <button className="dt-add">
              <i className="fas fa-plus"></i>
            </button>
          </div>
          <button className="dt-addtocart ">
            Add To Cart
          </button>
        </div>
      </div>
    </>
  )
}

export default ProductWrap
