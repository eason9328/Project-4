import React, {useEffect,useState} from 'react'
import Header from '../Component/Header.jsx'
import Subscribe from '../Component/Subscribe.jsx'
import Ins from '../Component/Ins.jsx'
import Footer from '../Component/Footer.jsx'
import Story from '../Component/Story.jsx'
import Cart from '../Pages/Cart.jsx'
import '../Styles/index.css'
import img01 from '../img/index/01.jpg'
import img02 from '../img/catalog/01.png'
import img03 from '../img/catalog/02.png'
import img04 from '../icon/13.png'
import img05 from '../img/catalog/03.png'
import img06 from '../img/catalog/06.png'
import img07 from '../img/catalog/08.png'
import img08 from '../img/catalog/04.png'
import img09 from '../img/catalog/05.png'
import img10 from '../img/catalog/07.png'
import {Link} from 'react-router-dom'
import { Slide } from "@mui/material"
import { useSelector } from 'react-redux'
export default function Index() {
  useEffect(() => {window.scrollTo(0, 0)}, []);
  const [isVisible,setVisible] = useState(true)
  const isShow = useSelector(state => state.cart.isShow)
  return (
    <div>
      <Header/>
      {isShow && <Cart/>}
      <section className="sec1">
        <img src={img01} alt="" />
        <div className="container">
          <Slide direction="up"
            in = {isVisible}
            timeout={800}>
            <div className="banner">
            <p>Say Hello to ToyStore!</p>
            <div>Welcome to ToyStore</div>
            <Link to="/catalog"><span>Open Catalog</span></Link>
          </div>
          </Slide>
          <div className="s1">
            <div className="s11">
              <div className="s111"></div>
            </div>
          </div>
        </div>
      </section>
      <section className="sec2">
        <div className="container">
          <div className="left">
            <img src={img02} alt="" className="img1"/>
            <div className="left1">
              <p>Stuffed Animals</p>
              <span>Shop now</span>
            </div>
          </div>
          <div className="right">
            <img src={img03} alt="" className="img2"/>
            <div className="right1">
              <p>Wooden Toys</p>
              <span>Shop now</span>
            </div>
          </div>
        </div>
      </section>
      <section className="sec3">
        <div className="container">
          <div className="top">
            <p>Stuffed Animals</p>
            <Link to="/catalog"><span>See All Toys <img src={img04} alt="" /></span></Link>
          </div>
          <div className="line"></div>
          <div className="bottom">        
               <Link to="/Details/1">
              <img src={img02} alt="" />
              <p>Teddy Bear</p>
              <span>$30.00 USD</span>
              </Link>
              <Link to="/Details/3">
              <img src={img05} alt="" />
              <p>Mega Plush Toy</p>
              <span>$38.00 USD</span>
              </Link>
              <Link to="/Details/6">
              <img src={img06} alt="" />
              <p>Cute Dog</p>
              <span>$24.00 USD</span>
              </Link>
               <Link to="/Details/8">
              <img src={img07} alt="" />
              <p>Little Friend</p>
              <span>$27.00 USD</span>
              </Link>
          </div>
        </div>
      </section>
      <section className="sec4">
        <div className="container">
          <div className="top">
            <p>Wooden Toys</p>
            <Link to="/catalog"><span>See All Toys <img src={img04} alt="" /></span></Link>
          </div>
          <div className="line"></div>
          <div className="bottom">
            <Link to="/Details/2">
              <img src={img03} alt="" />
              <p>Happy Flower</p>
              <span>$38.00 USD</span>
            </Link>
            <Link to="/Details/4">
              <img src={img08} alt="" />
              <p>Lift Machine</p>
              <span>$24.00 USD</span>
            </Link>
            <Link to="/Details/5">
              <img src={img09} alt="" />
              <p>Wooden Camera</p>
              <span>$16.00 USD</span>
            </Link>
            <Link to="/Details/7">
              <img src={img10} alt="" />
              <p>Little Rabbit</p>
              <span>$32.00 USD</span>
            </Link>
          </div>
        </div>
      </section>
      <Story/>
      <Subscribe/>
      <Ins/>
      <Footer/>
    </div>
  )
}
