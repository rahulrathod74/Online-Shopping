import React, { useState, useEffect } from 'react';
 import './Slider.css'; // Import CSS file containing styles
import watch from "../assets/watch.png"
import offer from "../assets/offer.png"
import sound from "../assets/soundbars.png"
import tv from "../assets/tv.png"
import digital from "../assets/Digital.png"
import dell from "../assets/Dell.png"
import airburd from "../assets/airburd.png"
function Slideshow() {
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
    let slides = document.getElementsByClassName("imgslide");
    let dots = document.getElementsByClassName("dot");
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
    <div className="slideshow-container" >

      <div className="imgslide">
        <img src={watch}  />
        
      </div>

      <div className="imgslide">
        <img src={offer}  />
       
      </div>

      <div className="imgslide">
        <img src={sound}  />
      </div>
      <div className="imgslide">
        <img src={tv}  />
      </div>
      <div className="imgslide">
        <img src={digital} />
      </div>
      <div className="imgslide">
        <img src={dell}  />
      </div>
      <div className="imgslide">
        <img src={airburd}  />
      </div>
     
      <a className="prev" onClick={() => plusSlides(-1)}>❮</a>
      <a className="next" onClick={() => plusSlides(1)}>❯</a>
     
      

      <div style={{ textAlign: 'center' }}>
        <span className="dot" onClick={() => currentSlide(1)}></span>
        <span className="dot" onClick={() => currentSlide(2)}></span>
        <span className="dot" onClick={() => currentSlide(3)}></span>
        <span className="dot" onClick={() => currentSlide(4)}></span>
        <span className="dot" onClick={() => currentSlide(5)}></span>
        <span className="dot" onClick={() => currentSlide(6)}></span>
        <span className="dot" onClick={() => currentSlide(7)}></span>
      </div>

    </div>
  );
}

export default Slideshow;
