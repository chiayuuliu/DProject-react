import React from 'react'

function Customized(props) {
  return (
    <div class="pd-client-banner">
      <div class="pd-target-wrap col-lg-7">
        <h1>我想要...</h1>
        <form class="pd-target d-flex" action="">
          <div class="pd-gain-wrap">
            <button class="pd-gain"></button>
            <p>增肌減脂</p>
          </div>
          <div class="pd-slim-wrap">
            <button class="pd-slim"></button>
            <p>變瘦</p>
          </div>
        </form>
        <h1>我每周運動...</h1>
        <form class="pd-target" action="">
          <button class="pd-five"></button>
          <p>五次以上</p>
          <button class="pd-three"></button>
          <p>三次左右</p>
          <button class="pd-none"></button>
          <p>不運動</p>
        </form>
      </div>
      <div class="pd-client-wrap col-lg-5">
        <div class="pd-client-info">
          <select name="" id="">
            <option value="">性別</option>
            <option value="">男</option>
            <option value="">女</option>
          </select>
          <label for="years">年齡</label>
          <input
            type="number"
            name="years"
            value=""
            class="pd-years"
          />
          <br />
          <label for="height">身高</label>
          <input
            type="number"
            name="height"
            value=""
            class="pd-height"
          />
          <label for="weight">體重</label>
          <input
            type="number"
            name="weight"
            value=""
            class="pd-weight"
          />
        </div>
        <div class="pd-suggest">
          <p>每日消耗熱量1500大卡</p>
          <p>建議每日攝取</p>
          <p>熱量1500大卡</p>
          <p>蛋白質50克</p>
        </div>
        <button class="pd-client-btn">查看飲食推薦</button>
      </div>
    </div>
  )
}

export default Customized
