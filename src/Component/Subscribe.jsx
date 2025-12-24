import React from 'react'
import '../Styles/sub.css'
import img01 from '../icon/12.png'

export default function Subscribe() {
  return (
    <div className="sub">
        <div className="container">
            <div className="inner">
            <div className="left">
            <div><img src={img01} alt="" /></div>
            <p>Subscribe to our newsletter & get <span>10% discount!</span></p>
            </div>
            <div className="right">
                <input type="email" placeholder='Enter your emial address'/>
                <button>Subscribe</button>
            </div>
            </div>
        </div>
    </div>
  )
}
