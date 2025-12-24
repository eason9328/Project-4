import React, {useEffect} from 'react'
import Header from '../Component/Header.jsx'
import Footer from '../Component/Footer.jsx'
import '../Styles/delivery.css'
import img07 from '../icon/13.png'
import img01 from '../img/foot/01.jpg'
import img02 from '../img/foot/02.jpg'
import img03 from '../img/foot/03.jpg'
import img04 from '../img/foot/04.jpg'
import img05 from '../img/foot/05.jpg'
import img06 from '../img/foot/06.jpg'
import img08 from '../icon/12.png'
import { useSelector } from 'react-redux'
import Cart from '../Pages/Cart.jsx'
import {Link} from 'react-router-dom'
export default function Delivery() {
  useEffect(() => {window.scrollTo(0, 0)}, []);
   const isShow = useSelector(state => state.cart.isShow)
  return (
    <div className="del">
      <Header />
      {isShow && <Cart/>}
      <div className="main">
        <div className="container">
          <span>Home <img src={img07} alt="" /> Delivery</span>
          <div className="content">
            <div className="left">
              <h1>Delivery Info</h1>
              <p className="head">Delivery Coverage</p>
              <p>We provide delivery services to the 48 contiguous United States. For shipments to Alaska, Hawaii, Puerto Rico, and other U.S. territories, please contact customer service to confirm delivery feasibility and additional details.</p>
              <p className="head">Delivery Timeframes</p>
              <ul>
                <li>Standard Shipping: Delivers in 3-5 business days with no extra expedited fees.</li>
                <li>Expedited Shipping: Arrives in 2-3 business days, requiring payment of an additional service fee.</li>
                <li>Express Shipping: Delivers in 1-2 business days, ideal for time-sensitive orders.</li>
                <li>Holiday Delivery: Delivery timeframes may be extended by 1-2 business days during major holidays (e.g., Thanksgiving, Christmas). Please refer to logistics notifications for the latest updates.</li>
              </ul>
              <p className="head">Shipping Fees</p>
              <ul>
                <li>Free Standard Shipping on orders with a subtotal of $79 or more (after discounts and before taxes).</li>
                <li>Orders under $79: Standard Shipping fee is $8.99; Expedited Shipping fee is $15.99; Express Shipping fee is $24.99.</li>
                <li>Additional surcharges apply to shipments to Alaska, Hawaii, and U.S. territories (varies by delivery location and package weight).</li>
              </ul>
              <p className="head">Shipment Tracking</p>
              <p>Once your order is shipped, you will receive a confirmation email containing a tracking number. You can track the real-time delivery status of your package via the "My Orders" page on our official website, brand app, or by entering the tracking number on the logistics carrier’s website (e.g., USPS, UPS, FedEx).</p>
              <p className="head">Important Notes</p>
              <ul>
                <li>Please inspect the package’s exterior and the quantity of items upon delivery. If there is damage, missing items, or discrepancies, refuse acceptance and contact customer service immediately for assistance.</li>
                <li>To change the delivery address or scheduled delivery time, please contact customer service before the package is shipped. Modifications are not available once the package has been dispatched.</li>
                <li>All toy products are packaged with shockproof materials to ensure intact delivery. If you receive a defective or damaged item, you may request a return or exchange with your order number within the return window.</li>
              </ul>
            </div>
            <div className="right">
              <p>Can't Find the Answer to Your Question?</p>
              <Link to='/Contacts'><span>Contact Us</span></Link>
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
          <Footer/>
    </div>
  )
}
