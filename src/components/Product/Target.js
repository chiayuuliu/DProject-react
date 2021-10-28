import React, { useState } from 'react'
// const TargetTag = [
//   {
//     增肌減脂:
//       'http://localhost:3000/img/商城img/客製化/增肌減脂.jpg',
//   },
//   {
//     變瘦: 'http://localhost:3000/img/商城img/客製化/變瘦.jpg',
//   },
// ]

function Target(props) {
  const { target, setTarget, exercises, setExercises } =
    props
  return (
    <>
      {/* 運動目標------------------- */}
      <h1>我想要...</h1>
      <div className="pd-target d-flex">
        <div className="pd-gain-wrap mlr">
          <div
            className="pd-gain pd-target"
            onClick={(e) => {
              setTarget('增肌減脂')
              e.target.classList.add('pd-cusClick')
              document
                .querySelectorAll('pd-target')
                .classList.remove('pd-cusClick')
              
            }}
          ></div>
          <p>增肌減脂</p>
        </div>

        <div className="pd-slim-wrap mlr">
          <div
            className="pd-slim pd-target"
            onClick={(e) => {
              setTarget('變瘦')
              e.target.classList.add('pd-cusClick')
            }}
          ></div>
          <p>變瘦</p>
        </div>
      </div>
      {/* 運動習慣------------------ */}
      <h1>我每周運動...</h1>
      <div className="pd-target d-flex">
        <div className="pd-five-wrap">
          <div
            className="pd-five"
            onClick={(e) => {
              setExercises('五次以上')
              e.target.classList.add('pd-cusClick')
            }}
          ></div>
          <p>五次以上</p>
        </div>
        <div className="pd-three-wrap">
          <div
            className="pd-three"
            onClick={(e) => {
              setExercises('三次左右')
              e.target.classList.add('pd-cusClick')
            }}
          ></div>
          <p>三次左右</p>
        </div>
        <div className="pd-none-wrap">
          <div
            className="pd-none"
            onClick={(e) => {
              setExercises('不運動')
              e.target.classList.add('pd-cusClick')
            }}
          ></div>
          <p>不運動</p>
        </div>
      </div>
    </>
  )
}

export default Target
