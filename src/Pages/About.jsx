import React, {useEffect} from 'react'
import Header from '../Component/Header.jsx'
import Subscribe from '../Component/Subscribe.jsx'
import Ins from '../Component/Ins.jsx'
import Footer from '../Component/Footer.jsx'
import Story from '../Component/Story.jsx'
import '../Styles/about.css'
import img01 from '../icon/13.png'
import img02 from '../img/about/01.jpeg'
import img03 from '../img/about/02.jpeg'
import img04 from '../img/about/03.jpeg'
import img05 from '../icon/13.png'
import { useSelector } from 'react-redux'
import Cart from '../Pages/Cart.jsx'
import {Link} from 'react-router-dom'
export default function About() {
  useEffect(() => {window.scrollTo(0, 0)}, []);
  const isShow = useSelector(state => state.cart.isShow)
  return (
    <div className="about"> 
      <Header />
      {isShow && <Cart/>}
      <div className="body">
        <div className="container">
          <span className="span1">Home <img src={img01} alt="" /> About</span>
          <div className="content">
            <p className="p1">All You Need is Fun!</p>
            <h1>Introducing ToyStore</h1>
            <p className="p2">Welcome to ToyStore—your go-to spot for fun, safe, and high-quality toys! We curate a vibrant collection for kids of all ages, from cuddly stuffed animals to interactive games and educational playsets. Every toy is picked to spark joy, creativity, and endless hours of play. Shop online with fast U.S. delivery and exclusive deals—let the fun begin!</p>
            <p className="p3">More About Us</p>
            <img src={img02} alt="" className="img1"/>
            <p className="p1">Made for ToyStore</p>
            <h1>Simple & Colorful Plush ToyStore - Pick Your Favorite!</h1>
            <div className="top">
              <div className="tleft">
                <h1>Beautifully Designed</h1>
                <div className="line"></div>
                <p>Our plush toys shine with beautifully designed details, blending charm and quality. Crafted from soft, skin-friendly fabrics in vibrant yet gentle hues, they’re perfect for little hands to cuddle. With meticulously made facial expressions and thoughtful design elements, these lovingly created companions spark imagination, prioritize safety, and offer huggable comfort.</p>
                <span>Get it for Free!</span>
              </div>
              <img src={img03} alt="" className="img2"/>
            </div>
            <div className="bottom">
              <img src={img04} alt="" className="img2"/>
              <div className="bright">
                <h1>100% Colorful</h1>
                <div className="line"></div>
                <p>Our plush toys are 100% colorful charm—bright, gentle hues that spark joy. From sunny yellows to vibrant blues, each fade-resistant plushie boasts vivid colors, perfect for kids and playrooms alike!</p>
                <Link to="/catalog"><span>Explore Our Toys <img src={img05} alt="" /></span></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Story/>
      <Subscribe/>
      <Ins/>
      <Footer/>
    </div>
  )
}
