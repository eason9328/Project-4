import React, {useEffect} from 'react'
import Header from '../Component/Header.jsx'
import Footer from '../Component/Footer.jsx'
import '../Styles/contact.css'
import img07 from '../icon/13.png'
import img09 from '../icon/07.png'
import img10 from '../icon/08.png'
import img11 from '../icon/09.png'
import img12 from '../icon/10.png'
import img13 from '../icon/11.png'
import img08 from '../icon/12.png'
import img01 from '../img/foot/01.jpg'
import img02 from '../img/foot/02.jpg'
import img03 from '../img/foot/03.jpg'
import img04 from '../img/foot/04.jpg'
import img05 from '../img/foot/05.jpg'
import img06 from '../img/foot/06.jpg'
import { useSelector } from 'react-redux'
import Cart from '../Pages/Cart.jsx'
export default function Contacts() {
   useEffect(() => {window.scrollTo(0, 0)}, []);
   const isShow = useSelector(state => state.cart.isShow)
  return (
    <div className="contacts">
      <Header />
      {isShow && <Cart/>}
      <div className="main">
        <div className="container">
          <span>Home <img src={img07} alt="" /> Contacts</span>
          <div className="content">
            <div className="left">
              <p>Leave a Message</p>
              <p>Full name</p>
              <input type="name" placeholder='Your full name'/>
              <p>Email Address</p>
              <input type="email" placeholder='Your contact email'/>
              <p>Leave a Message</p>
              <textarea placeholder="Message text..."></textarea>
              <span>SEND MESSAGE</span>
            </div>
            <div className="right">
              <p>Contact Info</p>
              <p>Follow Us</p>
              <div>
                <img src={img09} alt="" />
                <img src={img10} alt="" />
                <img src={img11} alt="" />
                <img src={img12} alt="" />
                <img src={img13} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sub">
                    <div className="container">
                        <div className="inner">
                        <div className="left">
                        <div><img src={img08} alt="" /></div>
                        <p>Subscribe to our newsletter & get <span>10% discount!</span></p>
                        </div>
                        <div className="right">
                            <input type="email" placeholder='Enter your emial address'/>
                            <button>Subscribe</button>
                        </div>
                        </div>
                    </div>
                </div>
              <div className="ins">
                  <div className="container">
                      <p>@toystore!!</p>
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
                <Footer/>
    </div>
  )
}
