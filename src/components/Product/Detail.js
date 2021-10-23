import React from 'react'

const Detail = (props) => {
  return (
    <>
      <div className="dt-product-img col-md-12 col-lg-6">
        <img
          src="http://localhost:3000/img/商城img/product-detail.png"
          alt=""
        />
      </div>
      <div className="dt-product-context col-sm-12 col-lg-6 fs24">
        <ul>
          <li>
            <i class="fas fa-quote-left"></i>
          </li>
          <li>
            香蒜雞胸肉保留了水分，口感柔潤，並且為水煮雞胸肉加了香蒜來提味。
          </li>
          <br />
          <li>
            鮮將雞胸肉以及調味料一起放入真空包裝機並且密封。
            閹漬三小時以上。
            再將真空包裝好以及調味好的雞胸肉放入熱水中以低溫70度烹調。
          </li>
        </ul>
      </div>
    </>
  )
}

export default Detail
