import React from 'react'
import s1 from "../assets/s1.jpg";
import s2 from "../assets/s2.jpg";
import s3 from "../assets/s3.png";
import s4 from "../assets/s4.jpg";
import s5 from "../assets/s5.jpg";
import p1 from "../assets/p1.jpg";
import p2 from  "../assets/p2.jpg";
import p3 from "../assets/p3.jpg";
import p4 from "../assets/p4.jpg";
import p5 from "../assets/p5.jpg";
import "./thirdcard.css"
const CardThird = () => {
    return (
      <>
      <div className='heading'>
        <h3>Soundbars & Home Theater | Flat 10% Off</h3>
        <button>view all</button>
    </div>
    <div className='maincard' >
    <div className='Accard'>
        <img className='high' src={s1} alt="" />
        <h4 >Samsung HW-Q990C/XL 656 W 11.1.4 channel Soundbar with Wirless</h4>
        <p >Deal Price:<span>&#x20B9;92,990.00</span> </p>
        <p className='mrp'>M.R.P:<span>&#x20B9;1,54,900.00</span></p>
        <p>You Save:40%(&#x20B9;61,910)</p>
        <button className='offerbtn'>OFFER AVAILABLE</button>  
    </div>
    <div className='Accard'>
        <img className='high' src={s2} alt="" />
        <h4>Sony HT-S20R,5.1 Channel Dolby Diqital Soundbar Home Theatre</h4>
        <p>Offer Price:<span>&#x20B9;16,990.00</span> </p>
        <p className='mrp'>M.R.P:<span>&#x20B9;19,990.00</span></p>
        <p>You Save:15%(&#x20B9;3,000)</p>
        <span className='star'><i class="fa-solid fa-star"></i></span>
        <span className='star'><i class="fa-solid fa-star"></i></span>
        <span className='star'><i class="fa-solid fa-star"></i></span>
        <span className='star'><i class="fa-solid fa-star"></i></span>
        <span className='star'><i class="fa-solid fa-star-half-stroke"></i></span>
        <span style={{fontWeight:"lighter"}}>(47)</span>
        <button className='offerbtn'>OFFER AVAILABLE</button>
    </div>
    <div className='Accard'>
        <img className='high' src={s3} alt="" />
        <h4>Sony HT-S40R,5.1 Channel Home Theater Soundbar System,600 Watts</h4>
        <p >Offer Price:<span>&#x20B9;24,999.00</span> </p>
        <p className='mrp'>M.R.P:<span>&#x20B9;34,990.00</span></p>
        <p>You Save:29%(&#x20B9;9,991)</p>
        <span className='star'><i class="fa-solid fa-star"></i></span>
        <span className='star'><i class="fa-solid fa-star"></i></span>
        <span className='star'><i class="fa-solid fa-star"></i></span>
        <span className='star'><i class="fa-solid fa-star"></i></span>
        <span className='star'><i class="fa-solid fa-star-half-stroke"></i></span>
        <span style={{fontWeight:"lighter"}}>(17)</span>
        <button className='offerbtn'>OFFER AVAILABLE</button>
    </div>
    <div className='Accard'>
        <img className='high' src={s4} alt="" />
        <h4>JBL partybox 110 Party Speaker with Dynamic light show that syncs to the</h4>
        <p>Offer Price:<span>&#x20B9;27,999.00</span> </p>
        <p className='mrp'>M.R.P:<span>&#x20B9;35,999.00</span></p>
        <p>You Save:22%(&#x20B9;8,000)</p>
        <button className='offerbtn'>OFFER AVAILABLE</button>
    </div>
    <div className='Accard'>
        <img className='high' src={s5} alt="" />
        <h4>Samsung HW-T42E/XL 2.1 Channel Bluetooth Soundbar with Dolby</h4>
        <p>Offer Price:<span>&#x20B9;7,990.00</span> </p>
        <p className='mrp'>M.R.P:<span>&#x20B9;16,990.00</span></p>
        <p>You Save:53%(&#x20B9;900)</p>
        <button className='offerbtn'>OFFER AVAILABLE</button>
    </div>
    <a className='prve1'><i class="fa-solid fa-chevron-left"></i></a>
    <a className='next1' ><i class="fa-solid fa-chevron-right"></i></a>
    </div>
    <hr />
    {/* smartphone*/}
    <div className='heading'>
        <h3>Smartphone Bonanza | 10% (Upto Rs.3000 off)</h3>
        <button>view all</button>
    </div>
    <div className='maincard' >
    <div className='Accard'>
        <img src={p1} alt="" />
        <h4 >Vivo Y28 5G 128 GB, 8 GB RAM, Aqua, Smartphone</h4>
        <p >Deal Price:<span>&#x20B9;16,999.00</span> </p>
        <p className='mrp'>M.R.P:<span>&#x20B9;21,999.00</span></p>
        <p>You Save:23%(&#x20B9;5,000)</p>
       
        <button className='offerbtn'>OFFER AVAILABLE</button>  
    </div>
    <div className='Accard'>
        <img src={p2} alt="" />
        <h4>Oppo Reno 11 5G, Green Smartphone (8 GB RAM, 128 GB ROM, 6.7 inch)</h4>
        <p>Offer Price:<span>&#x20B9;29,999.00</span> </p>
        <p className='mrp'>M.R.P:<span>&#x20B9;38,999.00</span></p>
        <p>You Save:23%(&#x20B9;9,000)</p>
        <button className='offerbtn'>OFFER AVAILABLE</button>
    </div>
    <div className='Accard'>
        <img src={p3} alt="" />
        <h4>Samsung Galaxy A15 5G 128 GB, 8 GB RAM Blue Black, Smartphone </h4>
        <p ><span>&#x20B9;19,499.00</span> </p>
        <button className='offerbtn'>OFFER AVAILABLE</button>
    </div>
    <div className='Accard'>
        <img src={p4} alt="" />
        <h4>Samsung Galaxy A25 5G 128 GB, 8 GB RAM Yellow, Smartphone</h4>
        <p><span>&#x20B9;26,999.00</span> </p>
       
        <button className='offerbtn'>OFFER AVAILABLE</button>
    </div>
    <div className='Accard'>
        <img src={p5} alt="" />
        <h4>Oppo A79 5G 128 GB, 8 GB RAM, Green, Mobile Phone</h4>
        <p>Offer Price:<span>&#x20B9;18,999.00</span> </p>
        <p className='mrp'>M.R.P:<span>&#x20B9;22,999.00</span></p>
        <p>You Save:17%(&#x20B9;4,000)</p>
        <button className='offerbtn'>OFFER AVAILABLE</button>
    </div>
    <a className='prve1'><i class="fa-solid fa-chevron-left"></i></a>
    <a className='next1' ><i class="fa-solid fa-chevron-right"></i></a>
    </div>
    <hr />
      </>
    )
  }
  
  export default CardThird;