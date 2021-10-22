import React from 'react'

function ProductCard(props) {
  return (
    <>
      <div className="pd-card d-flex ">
        <div className="pd-img">
          <img
            src="http://localhost:3000/img/商城img/product.png"
            alt=""
          />
        </div>
        <div className="pd-card-intro d-flex">
          <div className="pd-name">雞胸肉沙拉</div>
          <p className="pd-cal">645 Calories</p>
          <p className="pd-price">NT$ 70</p>
          <div className="pd-btn-wrap d-flex">
            <button className="pd-order-btn">
              ORDER NOW
            </button>
            <div className="pd-love-icon">
              <i className="far fa-heart"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductCard
