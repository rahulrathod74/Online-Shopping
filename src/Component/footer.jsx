import React from 'react'
import "./footer.css"
import store from "../assets/store.webp"
import store2 from "../assets/store2.webp"
const Footer = () => {
  return (
   <>
   <footer className='mainfooter'>
    <div className='foot'>
        <ul className='ulstyle'>
            <p className='footer-heading'>PRODUCT CATEGORIES</p>
            <li>Smartphones</li>
            <li>Laptops</li>
            <li>DSLR Cameras</li>
            <li>Televisions</li>
            <li>Air Conditionerss</li>
            <li>Refrigerators</li>
            <li>Kitchen Appliances</li>
            <li>Accessories</li>
            <li>Personal Care & Grooming</li>
        </ul>
        <ul className='ulstyle'>
            <p className='footer-heading'>SITE INFO</p>
            <li>About Reliance Digital</li>
            <li>resQ Services</li>
            <li>Site Map</li>
            <li>Gift Cards</li>
            <li>Air Conditionerss</li>
            <li>Corporate Enquires</li>
            <li>Contact Us</li>
        </ul>
        <ul className='ulstyle'>
            <p className='footer-heading'>RESOURCE CENTRE</p>
            <li>Product Reviews</li>
            <li>Buying Guides</li>
            <li>How Tos</li>
            <li>Featured Stories</li>
            <li>Events & Happenings</li>
            <li>Nearest Store</li>
           
        </ul>
        <ul className='ulstyle'>
            <p className='footer-heading'>POLICIES</p>
            <li>Terms of Use</li>
            <li>FAQs</li>
            <li>Cancellation and Return Policy</li>
            <li>Pricing and Payments Policy</li>   
            <li>Shipping and Delivery Policy</li>
            <li>Privacy Policy</li>
            <li>E-waste Recycling Policy</li>
            <li>EMI and Additional Cashback T&C</li>
            <li>RelianceOne Loyalty Program T&C</li>
            <li>Caution Notice</li>
           
        </ul>
    </div>
    <div className='some'>
        <div className='follow'>
            <p className='footer-heading'>Follow Us</p>
            <ul className='icon-style'>
                <li><i class="fa-brands fa-square-facebook"></i></li>
                <li><i class="fa-brands fa-twitter"></i></li>
                <li><i class="fa-brands fa-square-youtube"></i></li>
            </ul>
        </div>
        <div className='follow'>
            <p className='footer-heading'>EXPERIENCE RELIANCE DIGITAL APP ON MOBILE</p>
            <ul className='images'>
                <li><img src={store} alt="" /></li>
                <li><img src={store2} alt="" /></li>
            </ul>
        </div>    
    </div>
    
   </footer>
   <div className='lastfoot'>
        <p className='para'>Disclaimer</p>
        <hr className='hd'/>
        <p className='para2'>Product prices, offers and availability are subject to change from time to time. All prices are inclusive of taxes. Product colours & images are only for illustration and they may not exactly match with the actual product. Product specs are subject to change & may vary from actual product. While every care is taken to avoid inaccuracies in content, these are provided as is, without warranty of any kind.</p>
        <hr className='df'/>
        <p className='para3'> © 2024 Reliance Digital. All Rights Reserved.</p>
    </div>
   </>
  )
}

export default Footer;