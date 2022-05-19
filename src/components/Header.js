import React from 'react'
import '../App.css';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import{getItemCount} from '../slices/thaliSlice'

const Header = () => {
const dispatch=useDispatch()
  const {CartCount}=useSelector((state)=>state.thali)

  useEffect(()=>{
    dispatch(getItemCount())
  })
  return (
    <div className='Header'>
        
    <img src='https://i.redd.it/u2hn626ulft21.jpg' alt='thali'/>
    <h3>Pick Your Thali</h3>
    <Link to="/Home"><h3>Home</h3></Link>
    <Link to="/Cart"><h3>Cart:{CartCount}</h3></Link>
</div>
  )
}

export default Header