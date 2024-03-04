import React, { useState, useEffect } from "react";
import "./slidersecond.css"; // Import CSS file containing styles
import A1 from "../assets/A1.avif";
import A2 from "../assets/A2.avif";
import A3 from "../assets/A3.webp";
import A4 from "../assets/A4.avif";
import A5 from "../assets/A5.avif";
import A6 from "../assets/A6.avif";
import A7 from "../assets/A7.avif";
import A8 from "../assets/A8.avif";
import A9 from "../assets/A9.avif";
import brand1 from "../assets/brand1.png"
import brand2 from "../assets/brand2.png";
import brand3 from "../assets/brand3.webp";
import brand4 from "../assets/brand4.png"
function SliderSecond() {
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
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
      setSlideIndex(1);
    }
    if (n < 1) {
      setSlideIndex(slides.length);
    }
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
      <div
        className="slideshow-container"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <div className="mySlides fade" style={{ width: "100%" }}>
          <img src={A1} style={{ width: "100%" }} />
        </div>
        <div className="mySlides fade" style={{ width: "100%" }}>
          <img src={A2} style={{ width: "100%" }} />
        </div>
        <div className="mySlides fade" style={{ width: "100%" }}>
          <img src={A3} style={{ width: "100%" }} />
        </div>
        <div className="mySlides fade" style={{ width: "100%" }}>
          <img src={A4} style={{ width: "100%" }} />
        </div>
        <div className="mySlides fade" style={{ width: "100%" }}>
          <img src={A5} style={{ width: "100%" }} />
        </div>
        <div className="mySlides fade" style={{ width: "100%" }}>
          <img src={A6} style={{ width: "100%" }} />
        </div>
        <div className="mySlides fade" style={{ width: "100%" }}>
          <img src={A7} style={{ width: "100%" }} />
        </div>
        <div className="mySlides fade" style={{ width: "100%" }}>
          <img src={A8} style={{ width: "100%" }} />
        </div>
        <div className="mySlides fade" style={{ width: "100%" }}>
          <img src={A9} style={{ width: "100%" }} />
        </div>

        <a className="prev" onClick={() => plusSlides(-1)}>
          ❮
        </a>
        <a className="next" onClick={() => plusSlides(1)}>
          ❯
        </a>

        <div style={{ textAlign: "center" }}>
          <span className="dot" onClick={() => currentSlide(1)}></span>
          <span className="dot" onClick={() => currentSlide(2)}></span>
          <span className="dot" onClick={() => currentSlide(3)}></span>
          <span className="dot" onClick={() => currentSlide(4)}></span>
          <span className="dot" onClick={() => currentSlide(5)}></span>
          <span className="dot" onClick={() => currentSlide(6)}></span>
          <span className="dot" onClick={() => currentSlide(7)}></span>
          <span className="dot" onClick={() => currentSlide(8)}></span>
          <span className="dot" onClick={() => currentSlide(9)}></span>
        </div>
      </div>
      <hr />
      <h2 className=" brand">THE RELIANCE DIGITAL BRAND PROMISE</h2>
      <div className="mainpromise">
        <div className="promis">
          <img src={brand1} alt="" />
          <p className="heading">INST DELIVERY</p>
          <p className="less">LESS THAN 3 HRS.</p>
        </div>
        <div className="promis">
          <img src={brand2} alt="" />
          <p className="heading">MULTIPLE FINANCE OPTIONS</p>
          <p className="less">NO COST EMI</p>
        </div>
        <div className="promis">
          <img src={brand3} alt="" />
          <p className="heading">SERVICE GUARANTEE</p>
          <p className="less">HASSLE FREE</p>
        </div>
        <div className="promis">
          <img src={brand4} alt="" />
          <p className="heading">UNMATCHED NETWORK</p>
          <p className="less">700 CITIES,200 STORES</p>
        </div>
      </div>
      <hr/>
    </>
  );
}

export default SliderSecond;
