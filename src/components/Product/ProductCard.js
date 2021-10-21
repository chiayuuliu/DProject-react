import React from 'react'

function ProductCard(props) {
  return (
    <>
      <div class="pd-card d-flex ">
        <div class="pd-img">
          <img src="./../img/專題/product.png" alt="" />
        </div>
        <div class="pd-card-intro d-flex">
          <div class="pd-name">雞胸肉沙拉</div>
          <p class="pd-cal">645 Calories</p>
          <p class="pd-price">NT$ 70</p>
          <div class="pd-btn-wrap d-flex">
            <button class="pd-order-btn">ORDER NOW</button>
            <div class="pd-love-icon">
              <i class="far fa-heart"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductCard
