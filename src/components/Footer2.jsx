import React from 'react'
import { MdOutlineLocalShipping } from 'react-icons/md'
import { GiReturnArrow } from 'react-icons/gi'
import {VscTag} from 'react-icons/vsc'
import { AiOutlineSafetyCertificate} from 'react-icons/ai'
import {FaInstagramSquare} from 'react-icons/fa'
import {AiFillFacebook} from 'react-icons/ai'
import {FaYoutubeSquare} from 'react-icons/fa'
import {AiFillTwitterSquare} from 'react-icons/ai'
import {BsPinterest} from 'react-icons/bs'
import './Footer2.css'
const Footer2 = () => {
  return (
    <div className='grid-1'>
      <div>
        <div>
        <MdOutlineLocalShipping/>
        </div>
        <div>
            <p>FREE SHIPPING</p>
        </div>
        <p>On Orders Above ₹299</p>
      </div>
      <div>
        <div>
        <GiReturnArrow/>
        </div>
        <div>
            <p>EASY RETURNS</p>
        </div>
        <p>15-Day Return Policy</p>
      </div>
      <div>
        <div>
        <AiOutlineSafetyCertificate/>
        </div>
        <div>
            <p>100%</p>
            <p>AUTHENTIC</p>
        </div>
        <p>Products Sourced Directly</p>
      </div>
      
      <div>
        <div>
        <VscTag/>
        </div>
        <div>
            <p>1900+ BRANDS</p>
        </div>
        <p>1.2 Lakh+ Products</p>
      </div>
       <div>  
       <p>Show us some love ❤ on social media</p>
       <div>
        <FaInstagramSquare/>
        <AiFillFacebook/>
        <FaYoutubeSquare/>
        <AiFillTwitterSquare/>
        <BsPinterest/>
        </div>
       </div>
      </div>
  )
}

export default Footer2
