import React from 'react'
import { FiSearch } from 'react-icons/fi'
import { BsHandbag } from 'react-icons/bs'
import {IoMdArrowForward } from 'react-icons/io'
import {FcGoogle} from 'react-icons/fc'
import { useState } from 'react'
import {AiOutlineArrowLeft} from 'react-icons/ai'
import './Nav.css'
//import
const Nav = () => {
  const [login, setlogin]=useState(false);
  const[shop,setshop]=useState(false);
  return (
    <div>
     <nav className='nav-1'>
      <div className='nav-1-left'>
        <div className='logo'>
        <h1>Nykaa</h1>
        </div>
        <h4>Categories</h4>
        <h4>Brands</h4>
        <h4>Luxe</h4>
        <h4>Nykaa Fashion</h4>
        <h4>Beauty Advice</h4>
      </div>
      <div className='nav-1-right'>
       <div className='input-div'>
       <FiSearch/>
       <input type="text" name='search' placeholder='Search on Nykaa' />
       </div>
        <div className='log-in' >
        <button className='sign-btn' onClick={()=>setlogin((x)=>!x)}>Sign in</button>
        {
          login==true ? <div className='sign-in-div'>
          <h1>Login / Create Account</h1>
          <p>Register now and get <b>2000 Nykaa reward points instantly!</b></p>
          <button>Sign in with Mobile/Email <IoMdArrowForward/></button>
          <button><FcGoogle/> Google <IoMdArrowForward/></button>
        </div> : ''
        }
        </div>
        <div className='bag'>
        <BsHandbag onClick={()=>setshop(true)}/>
        {
          shop==true?<div className='shop-div'>
            <AiOutlineArrowLeft onClick={()=>setshop(false)}/>
            <h1>Bag</h1>
          <img src="https://asset.nykaafashion.com/static/assets/empty-cart.37b1b704.png" alt="bag" />
          <h1>Your Shopping Bag is Empty</h1>
          <p>This feels too light! Go on, add all your favourites</p>
          <button>Start Shopping</button>
        </div>:''
        }
        <div>

        </div>
        </div>
      
      </div>
     </nav>
     
    </div>
    
  )
}

export default Nav
