import React, { useState, useEffect } from 'react'
import Header from '../Component/Header.jsx'
import Subscribe from '../Component/Subscribe.jsx'
import Ins from '../Component/Ins.jsx'
import Footer from '../Component/Footer.jsx'
import Cart from '../Pages/Cart.jsx'
import '../Styles/detail.css'
import { useParams } from 'react-router-dom';
import goods from "../Data/goods"
import img07 from '../icon/13.png'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { addCart, setIsShow } from '../Store/modules/cartSlice'
export default function Details() {
  const params = useParams()
  const goodInfo = goods.find(item => item.id == params.id)
  const p1 = goodInfo.type === 'Stuffed Animals'
    ? 'Our stuffed animals feature ultra-soft, non-toxic fabric and fluffy filling—gentle on kids’ skin for cozy cuddles. With vivid, fade-resistant colors, they spark imagination and offer comforting companionship for playtime and bedtime.'
    : 'Our wooden toys are made of 100% natural, sustainable wood—safe, non-toxic, with a gentle touch perfect for little hands. Each piece sparks creativity and hands-on skills, boosting fine motor development and imagination. More durable than plastic alternatives, they blend craftsmanship with educational value, making them a great choice for play and growth.'
  const p2 = goodInfo.type === 'Stuffed Animals'
    ? 'Materials and Texture of Plush Toys'
    : 'Materials and Texture of Wooden Toys'
  const p3 = goodInfo.type === 'Stuffed Animals'
    ? 'Our stuffed animals are crafted with OEKO-TEX certified super-soft fabric and eco-friendly PP cotton filling—safe, non-toxic, and gentle on kids’ skin. Their cuddly texture offers a soothing sensory experience, perfect for naptime snuggles or bedtime comfort.'
    : 'Our wooden toys are crafted from 100% natural, sustainably sourced wood—safe, non-toxic, and gentle on little hands. Designed to spark creativity and hands-on learning, each piece encourages problem-solving, fine motor skills, and imaginative play that grows with your child.'
  const p4 = goodInfo.type === 'Stuffed Animals'
    ? 'With vibrant, fade-resistant colors and exquisite embroidered details, each plushie sparks imaginative role-play and fosters a sense of security. Just the right size for little hands to hold, they’re durable companions for years of joyful play.'
    : 'Unlike plastic alternatives, these timeless toys boast exceptional durability, resisting wear and tear for years of joyful use. From classic building blocks to interactive puzzles, every wooden toy blends craftsmanship with educational value.'
  const [list, setList] = useState(goods)
  const sList = list.sort(() => Math.random() - 0.5).slice(0, 8)
  useEffect(() => {window.scrollTo(0, 0);setCount(1)}, [params.id])
  const dispatch = useDispatch()
  const [count,setCount] = useState(1)
  const isShow = useSelector(state => state.cart.isShow)
   const handleAdd = ()=>{
        if(goodInfo){
            dispatch(addCart({
                id:goodInfo.id,
                title:goodInfo.title,
                price:goodInfo.price,
                img:goodInfo.img,
                num:count
            }))
        }
    }
     const handleChange = (e) =>{
        const inputValue = Number(e.target.value)
        if(!isNaN(inputValue) && inputValue > 0){
            setCount(inputValue)
        }
    }
  return (
    <div className="detail">
      <Header />
      {isShow && <Cart/>}
      <div className="body">
        <div className="container">
          <span className="span1">Home <img src={img07} alt="" /> Catalog <img src={img07} alt="" /> {goodInfo.title}</span>
          <div className="content">
            <div className="shown">
              <div className="sleft">
                <h1>{goodInfo.title}</h1>
                <p>{p1}</p>
                <h3>${goodInfo.price.toFixed(2)} USD</h3>
                <div className="inn">
                  <input type="number" value={count} onChange={handleChange} min="1"/>
                  <span onClick={()=>{dispatch(setIsShow(!isShow));handleAdd()}}>Add to Cart</span>
                </div>
              </div>
              <img src={goodInfo.img} alt="" />
            </div>
            <div className="inn1">
              <p>Product Details</p>
              <p>SKU: {goodInfo.sku}</p>
            </div>
            <div className="line"></div>
            <div className="inn2">
              <div className="inn2left">
                <h2>{p2}</h2>
                <p>{p3}</p>
                <p>{p4}</p>
              </div>
              <div className="inn2right">
                <div><p>Width</p><p>{goodInfo.width} in</p></div>
                <div><p>Height</p><p>{goodInfo.height} in</p></div>
                <div><p>Length</p><p>{goodInfo.length} in</p></div>
                <div><p>Weight</p><p>{goodInfo.weight} oz</p></div>
              </div>
            </div>
          </div>
          <div className="inn3">
            <p>Related Products</p>
            <Link to='/catalog'><span>See All Toys <img src={img07} alt="" /></span></Link>
          </div>
          <div className="line"></div>
          <div className="inn4">
            {sList.map((item) => (
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
      <Subscribe />
      <Ins />
      <Footer />
    </div>
  )
}
