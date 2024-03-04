import React, { useState, useEffect } from 'react';
import b1 from "../assets/B1.avif";
import b2 from "../assets/B2.avif";
import b3 from "../assets/B3.avif";
import b4 from "../assets/B4.avif";
import "./sliderthird.css"
function SliderThird() {
  const [slideIndex, setSlideIndex] = useState(1);

  useEffect(() => {
    showSlides(slideIndex);
  }, [slideIndex]);

  function plusSlides(n) {
    showSlides(slideIndex + n);
  }

  function currentSlide(n) {
    showSlides(n);
  }

  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mypoint");
    let dots = document.getElementsByClassName("ot");
    if (n > slides.length) { setSlideIndex(1); }
    if (n < 1) { setSlideIndex(slides.length); }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[n - 1].style.display = "block";
    dots[n - 1].className += " active";
    setSlideIndex(n);
  }

  return (
    <>
    <div className="slideshow-container" >

      <div className="mypoint" style={{width:"100%"}}>
        <img src={b1} style={{width:"100%"}}/>        
      </div>
      <div className="mypoint" style={{width:"100%"}}>
        <img src={b2} style={{width:"100%"}}/>        
      </div>
      <div className="mypoint" style={{width:"100%"}}>
        <img src={b3} style={{width:"100%"}}/>        
      </div>
      <div className="mypoint" style={{width:"100%"}}>
        <img src={b4} />        
      </div>


     
      <a className="prevthird" onClick={() => plusSlides(-1)}>❮</a>
      <a className="nextthird" onClick={() => plusSlides(1)}>❯</a>
     
      

      <div style={{ textAlign: 'center' }}>
        <span className="ot" onClick={() => currentSlide(1)}></span>
        <span className="ot" onClick={() => currentSlide(2)}></span>
        <span className="ot" onClick={() => currentSlide(3)}></span>
        <span className="ot" onClick={() => currentSlide(4)}></span>
      </div>
    </div>
    <hr />
    </>
  );
}

export default SliderThird;
