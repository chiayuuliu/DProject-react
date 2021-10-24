import React from 'react'
import { Link } from 'react-router-dom'

function ProductCard(props) {
  const { products, sid, name, cal, price } = props
  return (
    <>
      <div
        className="pd-card d-flex "
        onClick={(e) => {
          console.log('key', { sid })
        }}
      >
        <div className="pd-img">
          <img
            src="http://localhost:3001/img/PM001.jpg"
            alt=""
          />
        </div>
        <div className="pd-card-intro d-flex">
          <div className="pd-name">{name}</div>
          <p className="pd-cal">{cal} Calories</p>
          <p className="pd-price">NT$ {price}</p>
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
