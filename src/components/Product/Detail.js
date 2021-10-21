import React from 'react'

const Detail = (props) => {
  const { IMG_PATH } = props
  return (
    <>
      <div className="dt-product-img col-md-12 col-lg-6">
        <img src={IMG_PATH + '/product.png'} alt="" />
      </div>
      <div className="dt-product-context col-sm-12 col-lg-6 fs24">
        <ul>
          <p>
            香蒜雞胸肉保留了水分，口感柔潤，並且為水煮雞胸肉加了香蒜來提味。
          </p>
          <li>烹調過程：</li>
          <li>
            1.將雞胸肉以及調味料一起放入真空包裝機並且密封。
          </li>
          <li>2.閹漬三小時以上。</li>
          <li>
            3.將真空包裝好以及調味好的雞胸肉放入熱水中以低溫70度烹調。
          </li>
        </ul>
      </div>
    </>
  )
}

export default Detail
