import React, { useState, useEffect } from 'react'
import Header from '../Component/Header.jsx'
import Footer from '../Component/Footer.jsx'
import Cart from '../Pages/Cart.jsx'
import '../Styles/cata.css'
import img07 from '../icon/13.png'
import img01 from '../img/foot/01.jpg'
import img02 from '../img/foot/02.jpg'
import img03 from '../img/foot/03.jpg'
import img04 from '../img/foot/04.jpg'
import img05 from '../img/foot/05.jpg'
import img06 from '../img/foot/06.jpg'
import img08 from '../icon/12.png'
import goods from "../Data/goods"
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'
export default function Catalog() {
  const [list,setList] = useState(goods)
  const [selectedCategory, setSelectedCategory] = useState("All Toys");
  const categories = ["All Toys", "Wooden Toys", "Stuffed Animals"];
  const selectedToys =  selectedCategory === 'All Toys'
    ? list
    : list.filter(item => item.type === selectedCategory);
  const sortedToys = selectedToys.sort((a, b) => a.id - b.id);
  const Click = (category) => {
    setSelectedCategory(category);
  };
  useEffect(() => {window.scrollTo(0, 0)}, []);
  const isShow = useSelector(state => state.cart.isShow)
  return (
    <div className="cata">
      <Header />
      {isShow && <Cart/>}
      <div className="body">
        <div className="container">
          <span className="span1">Home <img src={img07} alt="" /> Catalog</span>
          <div className="top">
            <h2>All Toys</h2>
            <div className="topright">
              {categories.map((category) =>(
                <span className={selectedCategory === category ? 'selected' : ''}
                onClick={() => Click(category)}>{category}</span>
              ))}
            </div>
          </div>
          <div className="line"></div>
          <div className="toys">
            {sortedToys.map((item) => (
              <Link to={`/Details/${item.id}`}>
                <div className="toy1">
                  <img src={item.img} alt="" />
                  <p>{item.title}</p>
                  <span>${item.price.toFixed(2)} USD</span>
                </div>  
              </Link>
            ))}
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
