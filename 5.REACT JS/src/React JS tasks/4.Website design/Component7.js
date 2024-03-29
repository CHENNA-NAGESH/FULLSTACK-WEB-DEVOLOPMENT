import './style.css';
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import Img1 from './images/aws1.jpg';
import Img2 from './images/aws2.jpg';
import Img3 from './images/aws3.jpg';
import Img4 from './images/aws4.jpg';
import Img5 from './images/hv.jpg';
import Img6 from './images/hv2.jpg';
import Img7 from './images/jaya.png';
import Img8 from './images/jp1.jpg';
import Img9 from './images/jp2.jpg';
import Img10 from './images/satya.png';
import Img11 from './images/tevit.png';
import Img12 from './images/veerababu.png';
import Img13 from './images/vinodh.png';

export default function SimpleSlider() {
  var settings = {

    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2
  };
  return (
    <div className='d27'>
    <center><Slider {...settings}>
      <div>
        <img src={Img1} alt='img'></img>
      </div>
      <div>
      <img src={Img2} alt='img'></img>
      </div>
      <div>
      <img src={Img3} alt='img'></img>
      </div>
      <div>
      <img src={Img4} alt='img'></img>
      </div>
      <div>
      <img src={Img5} alt='img'></img>
      </div>
      <div>
        <img src={Img6} alt='img'></img>
      </div>
      <div>
        <img src={Img7} alt='img'></img>
      </div>
      <div>
        <img src={Img8} alt='img'></img>
      </div>
      <div>
        <img src={Img9} alt='img'></img>
      </div>
      <div>
        <img src={Img10} alt='img'></img>
      </div>
      <div>
        <img src={Img11} alt='img'></img>
      </div>
      <div>
        <img src={Img12} alt='img'></img>
      </div>
      <div>
        <img src={Img13} alt='img'></img>
      </div>
    </Slider></center>
    </div>
  );
}