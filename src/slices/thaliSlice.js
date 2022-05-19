import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value:[],
  total:1,
  item:1,
  CartCount:0
}

export const thaliSlice = createSlice({
  name: 'thali',
  initialState,
  reducers: {
    addItem:(state,action)=>{
     state.value.push(action.payload);
     console.log(action.payload);
    },

    getItemCount:(state,action)=>{
      state.CartCount=state.value.length
    },

  
    removeItem:(state, action)=>{
      const newList = state.value.filter((ele,id)=>ele.id!==action.payload)
      state.value = newList;
    },

  incQuantity:(state, action)=>{
      const cartItem = state.value.find((ele)=>ele.id===action.payload)
      cartItem.quantity= cartItem.quantity +1
  },

  decQuantity:(state, action)=>{
    const cartItem = state.value.find((ele)=>ele.id===action.payload)
    cartItem.quantity= cartItem.quantity -1
  },

  totalBill:(state)=>{
      let item = 0;
      let amount=0;
      state.value.forEach((ele)=>{
              console.log(ele)
          item += ele.quantity;
          amount += item*ele.price;
      })

      state.item=item
      state.total=amount

     
      },
  },
})


export const {addItem, removeItem,getItemCount, incQuantity, decQuantity,totalBill } = thaliSlice.actions

export default thaliSlice.reducer