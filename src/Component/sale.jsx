import React from 'react'
import iphone13 from '../assets/iphone-13.webp';
import iphone from "../assets/iPhone-15.webp"
import plus from "../assets/plus.webp"
import earpods from "../assets/Earpods.webp"
import samsung from "../assets/samsung.avif"
import redmin from "../assets/Redmi.avif"
import realmes from "../assets/Realmes.avif"
import jio from "../assets/jio.avif"
import "./sale.css"
const Sale = () => {
  return (
    <>
    <h3>Digital Midnight Sale</h3>
    <div className='salecard'>
        <img src={iphone13} alt="" />
        <img src={iphone} alt="" />        
        <img src={plus} alt="" />        
        <img src={earpods} alt="" />        
    </div>
    <hr />
    <h3>Top Deals on Mobiles</h3>
    <div className='salecard'>
        <img src={samsung} alt="" />
        <img src={redmin} alt="" />        
        <img src={realmes} alt="" />        
        <img src={jio} alt="" />        
    </div>
    <hr />
    </>
  )
}

export default Sale;