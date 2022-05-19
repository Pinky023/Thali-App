import React from 'react'
import './App.css'
import Home from './components/Home'
import Cart from './components/Cart'
import Header from './components/Header'

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {

  return (
    <Router>
    <div className='App'>
       <Header />
   
       
        <Routes>
           <Route path="/" exact element={<Home/>} />
           <Route path="/Home" exact element={<Home/>}/>
           <Route path="/Cart" exact element={<Cart/>} />
        </Routes>
    </div>
 </Router>
    
  
  )
}

export default App
