import React, { useState, useEffect } from 'react'
import '../Styles/cart.css'
import { useDispatch, useSelector } from 'react-redux'
import { delCart, setIsShow,addCart } from '../Store/modules/cartSlice'
export default function Cart() {
  const dispatch = useDispatch()
   const cartItems = useSelector((state)=>(state.cart.cart))
    const totalPrice = cartItems.reduce((total,item)=>{
        return total + item.price * item.num
    },0)
  const isShow = useSelector(state => state.cart.isShow)
   const handleDel = (id)=>{
        dispatch(delCart({id:id}))
    }
  const [btn1,setBtn1] = useState(false)
  if(cartItems.length == 0){
        return(
            <div className="cart">
      <div className="c1">
        <h2>Your Cart</h2>
        <span onClick={()=>{dispatch(setIsShow(!isShow))}}>&times;</span>
      </div>
      <div className="c4">Cart is empty</div>
      </div>
        )
    }
  return (
    <div className="cart">
      <div className="c1">
        <h2>Your Cart</h2>
        <span onClick={()=>{dispatch(setIsShow(!isShow))}}>&times;</span>
      </div>
      {cartItems.map((item)=>(
        <div className="c2">
          <div>
          <img src={item.img} alt="" />
          <div className="c21">
            <h2>{item.title}</h2>
            <button className="bu" onClick={()=>{handleDel(item.id)}}>Remove</button>
          </div>
        </div>
        <div className="c22">
        <input type="number" value={item.num} min="1" onChange={(e) =>{
        const newNum = Number(e.target.value)
    if (!isNaN(newNum)  && newNum > 0) {
    const numDiff = newNum - item.num
    if (numDiff !== 0) {
      dispatch(addCart({
        id: item.id,
        title: item.title,
        price: item.price,
        img: item.img,
        num: numDiff,   
      }))
    }}
    }}/>
        <p>Total: ${(item.num*item.price).toFixed(2)}</p>
        </div>
      </div>
       ))}
      <div className="c3">
        <div className="c31">
          <h2>Subtotal:</h2>
          <h2>${totalPrice.toFixed(2)} USD</h2>
        </div>
        <span onClick={()=>setBtn1(true)}>COUNTINUE TO CHECKOUT</span>
        <span className={btn1 ? 'shown' : ''}>Checkout is disabled on this site.</span>
      </div>
    </div>
  )
}
