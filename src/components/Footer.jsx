import React from 'react'
import {FaRegEnvelope } from 'react-icons/fa'
import {BsApple} from 'react-icons/bs'
import {FcGoogle} from 'react-icons/fc'
import {BsTelephoneFill} from 'react-icons/bs'
import {GoDeviceMobile} from 'react-icons/go'
import './Footer.css'
const Footer = () => {
  return (
    <div className='main-foot-1'>
      <div className='first-foot'>
      <div className='envelope'>
       <FaRegEnvelope/> 
      <p>Get special discount on your inbox</p>
      </div>
      <input type="text" placeholder='Your Email' />
      <button>SEND</button>
      </div>
      <div className='sec-foot'>
      <div className='mobile'>
      <GoDeviceMobile/>
      <p>EXPERIENCE THE NYKAA MOBILE APP</p>
      </div>
      <div className='mobile-btn'>
      <div className='google'>
        <FcGoogle/>
        <div className='google-p'>
            <p>Get it on</p>
            <h5>Google Play</h5>
        </div>
      </div>
      <div className='google'>
        <BsApple/>
        <div className='google-p'>
            <p>Download on the</p>
            <h5>App store</h5>
        </div>
      </div>
      </div>
      </div>
      <div className='telephone'>
      <div className='telephone-icon'>
        <BsTelephoneFill/>
        <div className='telephone-p'>
        <div className='telephone-p-1'>
        <p>FOR ANY HELP, YOU MAY CALL US AT</p>
        <p>1800-267-4444</p>
        </div>
       <div>
       <p>(Monday to Saturday, 8AM to 10PM and Sunday, 10AM to 7PM)</p>
       </div>
        </div>
      </div>
      
      </div>
    </div>
  )
}

export default Footer
