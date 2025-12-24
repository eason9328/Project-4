import React from 'react'
import '../Styles/header.css'
import img01 from "../icon/01.png"
import img02 from "../icon/02.png"
import img03 from "../icon/03.png"
import img04 from "../icon/04.png"
import img05 from "../icon/05.png"
import img06 from "../icon/06.png"
import {Link} from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { setIsShow } from '../Store/modules/cartSlice'
export default function Header() {
   const cartItems = useSelector((state) => state.cart.cart)
  const totalCount = cartItems.reduce((sum, item) => sum + item.num, 0)
  const dispatch = useDispatch()
  const isShow = useSelector(state => state.cart.isShow)
  return (
          <div className="header">
            <div className="container">
            <div className="top">
              <div>ToyStore</div>
              <div className="tright">
               <img src={img01} alt="" />
               <img src={img02} alt="" />
               <img src={img03} alt="" />
               <img src={img04} alt="" />
               <img src={img05} alt="" />
              </div>
            </div>
            <div className="bottom">
                <ul>
                   <Link to="/"><li className="bbb">ToyStore</li></Link>
                   <Link to="/catalog"><li>Catalog</li></Link>
                   <Link to="/delivery"><li>Delivery</li></Link>
                   <Link to="/about"><li>About</li></Link>
                   <Link to="/contacts"><li>Contacts</li> </Link>
                </ul>
              <div className="bright" onClick={()=>{dispatch(setIsShow(!isShow))}}>
                <p>Cart</p>
                <img src={img06} alt="" />
                <span>{totalCount}</span>
              </div>
            </div>
            </div>
          </div>
  )
}
