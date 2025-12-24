import {createSlice} from "@reduxjs/toolkit"
const cartSlice = createSlice({
    name: 'cart',
  initialState: {
    cart:[],       
    isShow: false,
  },
  reducers: {
     addCart(state,action){
            const index = state.cart.findIndex((item)=>(item.id === action.payload.id))
            if(index === -1){
                state.cart.push(action.payload)
            }else{
                state.cart[index].num += action.payload.num
            }
        },
        delCart(state,action){
            state.cart = state.cart.filter((item)=>(item.id !== action.payload.id))
        },
    setIsShow(state, action) {
      state.isShow = action.payload
    },
  }
})

const {addCart,delCart,setIsShow} = cartSlice.actions
const cartReducer = cartSlice.reducer
export { addCart,delCart,setIsShow } 
export default cartReducer