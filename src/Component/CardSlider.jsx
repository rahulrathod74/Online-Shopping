import React from 'react'
import "./card.css"
import sam1 from "../assets/Samsung1.jpg";
import sam5 from "../assets/sam5.jpg";
import trimmer from "../assets/trimmer.jpg";
import butterfly from "../assets/Butterfly.jpg";
import iron from "../assets/iron.png"
import philips from "../assets/Philips.jpg"
import prestige from "../assets/Prestige.jpg"
import airpods from "../assets/airpods.jpg"
import oneplus from "../assets/oneplus.jpg"
import pods from "../assets/pods.jpg"
import sony from "../assets/sony.jpg"
import echo from "../assets/echo.jpg"
const CardSlider = () => {
  return (
    <>
    <div className='heading'>
        <h3>2024 New Range of ACs from Rs. 22990*</h3>
        <button>view all</button>
    </div>
    <div className='maincard' >
    <div className='Accard'>
        <img src={sam1} alt="" />
        <h4>SAMSUNG 1.5 Ton Star 5 in1 Convertible Inverter Split AC,</h4>
        <p >Offer Price:<span>&#x20B9;37990.00</span> </p>
        <p className='mrp'>M.R.P:<span>&#x20B9;60,990.00</span></p>
        <p>You Save:38%(&#x20B9;23,000)</p>
    </div>
    <div className='Accard'>
        <img src={sam1} alt="" />
        <h4>SAMSUNG 1.5 Ton 5 Star Wifi Inverter Split AC,18CY5AMWK</h4>
        <p>Offer Price:<span>&#x20B9;53,990.00</span> </p>
        <p className='mrp'>M.R.P:<span>&#x20B9;75,990.00</span></p>
        <p>You Save:29%(&#x20B9;22,000)</p>
    </div>
    <div className='Accard'>
        <img src={sam1} alt="" />
        <h4>SAMSUNG 1.5 Ton 5 Star wifi Inverter Split AC,AR18CY3ANWK</h4>
        <p >Offer Price:<span>&#x20B9;43,990.00</span> </p>
        <p className='mrp'>M.R.P:<span>&#x20B9;64,990.00</span></p>
        <p>You Save:32%(&#x20B9;21,000)</p>
    </div>
    <div className='Accard'>
        <img src={sam1} alt="" />
        <h4>SAMSUNG 1.5 Ton Star 5 in 1 Convertible Inverter Split AC,</h4>
        <p>Offer Price:<span>&#x20B9;47,990.00</span> </p>
        <p className='mrp'>M.R.P:<span>&#x20B9;71,990.00</span></p>
        <p>You Save:33%(&#x20B9;24,000)</p>
    </div>
    <div className='Accard'>
        <img src={sam5} alt="" />
        <h4>SAMSUNG 1.5 Ton Star 3 in1 Convertible Inverter Split AC,</h4>
        <p>Offer Price:<span>&#x20B9;45,990.00</span> </p>
        <p className='mrp'>M.R.P:<span>&#x20B9;73,250.00</span></p>
        <p>You Save:37%(&#x20B9;27,260)</p>
    </div>
    <a className='prve1'><i class="fa-solid fa-chevron-left"></i></a>
    <a className='next1' ><i class="fa-solid fa-chevron-right"></i></a>
    </div>
    
    <hr />
    {/* everyday Application */}
    <div className='heading'>
        <h3>Everyday Appliances Starting From Rs. 389</h3>
        <button>view all</button>
    </div>
    <div className='maincard' >
    <div className='Accard'>
        <img src={trimmer} alt="" />
        <h4 >Lifelong beard Trimmer LLPCM11 With 4hr Runtime,Quick Charqe,20Length</h4>
        <p >Deal Price:<span>&#x20B9;599.00</span> </p>
        <p className='mrp'>M.R.P:<span>&#x20B9;1,800.00</span></p>
        <p>You Save:67%(&#x20B9;1,201)</p>
        <span className='star'><i class="fa-solid fa-star"></i></span>
        <span className='star'><i class="fa-solid fa-star"></i></span>
        <span className='star'><i class="fa-solid fa-star"></i></span>
        <span className='star'><i class="fa-solid fa-star"></i></span>
        <span className='star'><i class="fa-solid fa-star-half-stroke"></i></span>
        <span style={{fontWeight:"lighter"}}>(52)</span>
        <button className='offerbtn'>OFFER AVAILABLE</button>  
    </div>
    <div className='Accard'>
        <img src={butterfly} alt="" />
        <h4>Butterfly 1.5L 1500W Electric kettle, Dry Boil Protection,EKN</h4>
        <p>Offer Price:<span>&#x20B9;589.00</span> </p>
        <p className='mrp'>M.R.P:<span>&#x20B9;1,478.00</span></p>
        <p>You Save:60%(&#x20B9;889)</p>
        <span className='star'><i class="fa-solid fa-star"></i></span>
        <span className='star'><i class="fa-solid fa-star"></i></span>
        <span className='star'><i class="fa-solid fa-star"></i></span>
        <span className='star'><i class="fa-solid fa-star"></i></span>
        <span className='star'><i class="fa-solid fa-star-half-stroke"></i></span>
        <span style={{fontWeight:"lighter"}}>(62)</span>
        <button className='offerbtn'>OFFER AVAILABLE</button>
    </div>
    <div className='Accard'>
        <img src={iron} alt="" />
        <h4>Baja Majesty DX 4,1000 Watts,Dry iron,White</h4>
        <p >Offer Price:<span>&#x20B9;599.00</span> </p>
        <p className='mrp'>M.R.P:<span>&#x20B9;1,400.00</span></p>
        <p>You Save:57%(&#x20B9;801)</p>
        <span className='star'><i class="fa-solid fa-star"></i></span>
        <span className='star'><i class="fa-solid fa-star"></i></span>
        <span className='star'><i class="fa-solid fa-star"></i></span>
        <span className='star'><i class="fa-solid fa-star"></i></span>
        <span className='star'><i class="fa-solid fa-star-half-stroke"></i></span>
        <span style={{fontWeight:"lighter"}}>(20)</span>
        <button className='offerbtn'>OFFER AVAILABLE</button>
    </div>
    <div className='Accard'>
        <img src={philips} alt="" />
        <h4>Phillips 10-in Multigroom Kit 60 min Runtime 10 Length Settings</h4>
        <p>Offer Price:<span>&#x20B9;2,299.00</span> </p>
        <p className='mrp'>M.R.P:<span>&#x20B9;3,095.00</span></p>
        <p>You Save:26%(&#x20B9;796,000)</p>
    
        <button className='offerbtn'>OFFER AVAILABLE</button>
    </div>
    <div className='Accard'>
        <img src={prestige} alt="" />
        <h4>Prestige PKOSS 1.5L 1500W Stainless Steel Electric Kettle,Single-Touch Lid</h4>
        <p>Offer Price:<span>&#x20B9;699.00</span> </p>
        <p className='mrp'>M.R.P:<span>&#x20B9;1,145.00</span></p>
        <p>You Save:39%(&#x20B9;446)</p>
        <span className='star'><i class="fa-solid fa-star"></i></span>
        <span className='star'><i class="fa-solid fa-star"></i></span>
        <span className='star'><i class="fa-solid fa-star"></i></span>
        <span className='star'><i class="fa-solid fa-star"></i></span>
        <span className='star'><i class="fa-solid fa-star-half-stroke"></i></span>
        <span style={{fontWeight:"lighter"}}>(39)</span>
        <button className='offerbtn'>OFFER AVAILABLE</button>
    </div>
    <a className='prve1'><i class="fa-solid fa-chevron-left"></i></a>
    <a className='next1' ><i class="fa-solid fa-chevron-right"></i></a>
    </div>
    <hr />
    {/* Selling Audio Accessories */}
    <div className='heading'>
        <h3>Best Selling Audio Accessories</h3>
        <button>view all</button>
    </div>
    <div className='maincard' >
    <div className='Accard'>
        <img src={airpods} alt="" />
        <h4 >Apple Airpods Pro(2nd Gen-USB-C type)with MaqSafe Charqing Case</h4>
        <p >Deal Price:<span>&#x20B9;23,490.00</span> </p>
        <p className='mrp'>M.R.P:<span>&#x20B9;24,900.00</span></p>
        <p>You Save:6%(&#x20B9;1,410)</p>
        <span className='star'><i class="fa-solid fa-star"></i></span>
        <span className='star'><i class="fa-solid fa-star"></i></span>
        <span className='star'><i class="fa-solid fa-star"></i></span>
        <span className='star'><i class="fa-solid fa-star"></i></span>
        <span className='star'><i class="fa-solid fa-star-half-stroke"></i></span>
        <span style={{fontWeight:"lighter"}}>(18)</span>
        <button className='offerbtn'>OFFER AVAILABLE</button>  
    </div>
    <div className='Accard'>
        <img src={oneplus} alt="" />
        <h4>OnePlus Bullets Z2 Bluetooth Wirless in Earphones with Mic,Bombastic</h4>
        <p>Offer Price:<span>&#x20B9;1499.00</span> </p>
        <p className='mrp'>M.R.P:<span>&#x20B9;2,290.00</span></p>
        <p>You Save:35%(&#x20B9;791)</p>
        <span className='star'><i class="fa-solid fa-star"></i></span>
        <span className='star'><i class="fa-solid fa-star"></i></span>
        <span className='star'><i class="fa-solid fa-star"></i></span>
        <span className='star'><i class="fa-solid fa-star"></i></span>
        <span className='star'><i class="fa-solid fa-star-half-stroke"></i></span>
        <span style={{fontWeight:"lighter"}}>(364)</span>
        <button className='offerbtn'>OFFER AVAILABLE</button>
    </div>
    <div className='Accard'>
        <img src={pods} alt="" />
        <h4>Apple EarPds with Lightning Connector,Protection from sweat and </h4>
        <p >Offer Price:<span>&#x20B9;1,599.00</span> </p>
        <p className='mrp'>M.R.P:<span>&#x20B9;2,000.00</span></p>
        <p>You Save:20%(&#x20B9;401)</p>
        <span className='star'><i class="fa-solid fa-star"></i></span>
        <span className='star'><i class="fa-solid fa-star"></i></span>
        <span className='star'><i class="fa-solid fa-star"></i></span>
        <span className='star'><i class="fa-solid fa-star"></i></span>
        <span className='star'><i class="fa-solid fa-star-half-stroke"></i></span>
        <span style={{fontWeight:"lighter"}}>(431)</span>
        <button className='offerbtn'>OFFER AVAILABLE</button>
    </div>
    <div className='Accard'>
        <img src={sony} alt="" />
        <h4>Sony WF-1000XM4 True Wireless Earbuds with Noise Cancellation,8hrs</h4>
        <p>Offer Price:<span>&#x20B9;12,499.00</span> </p>
        <p className='mrp'>M.R.P:<span>&#x20B9;19,990.00</span></p>
        <p>You Save:37%(&#x20B9;7,491)</p>
        <button className='offerbtn'>OFFER AVAILABLE</button>
    </div>
    <div className='Accard'>
        <img src={echo} alt="" />
        <h4>All New Amazon Echo Dot,Powerful bass,Voice Assistant,Premium Audio,</h4>
        <p>Offer Price:<span>&#x20B9;3,799.00</span> </p>
        <p className='mrp'>M.R.P:<span>&#x20B9;4,499.00</span></p>
        <p>You Save:16%(&#x20B9;700)</p>
        <span className='star'><i class="fa-solid fa-star"></i></span>
        <span className='star'><i class="fa-solid fa-star"></i></span>
        <span className='star'><i class="fa-solid fa-star"></i></span>
        <span className='star'><i class="fa-solid fa-star"></i></span>
        <span className='star'><i class="fa-solid fa-star-half-stroke"></i></span>
        <span style={{fontWeight:"lighter"}}>(102)</span>
        <button className='offerbtn'>OFFER AVAILABLE</button>
    </div>
    <a className='prve1'><i class="fa-solid fa-chevron-left"></i></a>
    <a className='next1' ><i class="fa-solid fa-chevron-right"></i></a>
    </div>
    <hr />
    </>
  )
}

export default CardSlider