import React from 'react'
import "./electronics.css"
import D1 from "../assets/D1.avif"
import D2 from "../assets/D2.avif"
import D3 from "../assets/D3.avif"
import D4 from "../assets/D4.avif"
import D5 from "../assets/D5.avif"
import D6 from "../assets/D6.avif"
import D7 from "../assets/D7.avif"
import D8 from "../assets/D8.avif"

const Electronics = () => {
  return (
    <>
    <h3>Great Deals on Electronics</h3>
    <div className='electronics'>
        <img src={D1} alt="" />
        <img src={D2} alt="" />
        <img src={D3} alt="" />
        <img src={D4} alt="" />
        <img src={D5} alt="" />
        <img src={D6} alt="" />
        <img src={D7} alt="" />
        <img src={D8} alt="" />  
    </div>
    <hr />
    </>
  )
}

export default Electronics