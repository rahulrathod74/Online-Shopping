import React from 'react'
import "./product.css"
import f1 from "../assets/f1.avif";
import f2 from "../assets/f2.webp";
import f3 from "../assets/f3.webp";
import f4 from "../assets/f4.webp";
import f5 from "../assets/f5.avif";
const Product = () => {
  return (
    <>
    <h3 className='product-heading'>EXPLORE OUR RANGE OF PRODUCTS</h3>
    <div  className='main-product'>
        <div className='pro1'>   
        <img  className="size" src={f1} alt="" />
        <p className='app'>Apple Store</p>      
        </div>
        <div className='pro1'>   
        <img  className="size" src={f2} alt="" />
        <p className='app'>Speakers & Headsets</p>      
        </div>
        <div className='pro1'>   
        <img  className="size" src={f3} alt="" />
        <p className='app'>Air Conditioners</p>      
        </div>
        <div className='pro1'>   
        <img  className="size" src={f4} alt="" />
        <p className='app'>Smartphone</p>      
        </div>
        <div className='pro1'>   
        <img  className="size" src={f5} alt="" />
        <p className='app'>Water Purifiers</p>      
        </div>
        <a className='prve1'><i class="fa-solid fa-chevron-left"></i></a>
        <a className='next1' ><i class="fa-solid fa-chevron-right"></i></a>
    </div>
    <div className='btn'>
        <button>Viwe all</button>
    </div>
    <hr />
    </>
  )
}

export default Product;