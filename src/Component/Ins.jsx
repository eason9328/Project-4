import React from 'react'
import '../Styles/ins.css'
import img01 from '../img/foot/01.jpg'
import img02 from '../img/foot/02.jpg'
import img03 from '../img/foot/03.jpg'
import img04 from '../img/foot/04.jpg'
import img05 from '../img/foot/05.jpg'
import img06 from '../img/foot/06.jpg'
export default function Ins() {
  return (
  <div className="ins">
    <div className="container">
        <p>@toystore</p>
        <div className="inner">
            <p>We're on Instagram!</p>
            <div>
                <img src={img01} alt="" />
                <img src={img02} alt="" />
                <img src={img03} alt="" />
                <img src={img04} alt="" />
                <img src={img05} alt="" />
                <img src={img06} alt="" />
            </div>
            <span>See More Photos</span>
        </div>
    </div>
  </div>
  )
}
