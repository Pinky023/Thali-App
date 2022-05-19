import React from 'react'
import { useEffect } from 'react'
import { removeItem,incQuantity,decQuantity,totalBill } from '../slices/thaliSlice'
import { useDispatch,useSelector } from 'react-redux'


const Cart = () => {
    const dispatch = useDispatch();
    const {value,total,item}=useSelector((state)=>state.thali)

    const increment=(id)=>{
        dispatch(incQuantity(id));
      console.log("increment")
    }

    const decrement=(id)=>{
        if(item<1){
            dispatch(removeItem(id))
        }
        else{
            dispatch(decQuantity(id))
        }
console.log("decrement")
    }

    const deleteItem=(id)=>{
        dispatch(removeItem(id))
console.log("delete")
    }

    useEffect(()=>{
        dispatch(totalBill())
    })
  return (
    <div>
        <table style={{width:"100%",padding:"50px"}} >
            <thead>
                <tr>
                    <th></th>
                    <th></th>
                    <th>Dish</th>
                    
                    
                    <th>Price</th>
                   
                   
                    <th>Quantity</th>
                  
                   
                    <th>Total Price</th>

                </tr>
            </thead>
            <tbody>
                {
                    value.map((ele)=>{
                        const{id,description,img,quantity,price}=ele
                        return(
                            <tr>
                                <td><button onClick={()=>deleteItem(id)}>X</button></td>
                                <td><img src={img} alt='items'/></td>
                               
                                <td>{description}</td>
                               
                                <td>{price}</td>
                               
                                <td>
                                  <span ><button onClick={()=>decrement(id)}>-</button></span>
                                  <span>{quantity}</span>
                                  <span ><button onClick={()=>increment(id)}>+</button></span>
                                </td>
                            
                                
                                <td>{quantity*price}</td>
                                
                            </tr>
                        )
                    })
                }
                <h2>Total Bill:{total}</h2>
            </tbody>
        </table>
    </div>
  )
}

export default Cart