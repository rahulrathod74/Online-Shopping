import React from 'react'
import iphone13 from '../assets/iphone-13.webp';
import iphone from "../assets/iPhone-15.webp"
import plus from "../assets/plus.webp"
import earpods from "../assets/Earpods.webp"
const Deal = () => {
  return (
    <>
    <h3></h3>
    <div className='salecard'>
        <img src={iphone13} alt="" />
        <img src={iphone} alt="" />        
        <img src={plus} alt="" />        
        <img src={earpods} alt="" />        
    </div>
    <hr />
    </>
  )
}

export default Deal