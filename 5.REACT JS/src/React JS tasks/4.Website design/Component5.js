import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './style.css';
import Img1 from './images/tconnect.png';
import Img2 from './images/makerssquare.png';
import Img3 from './images/projectspace.png';
import Img4 from './images/Drive-Ready.png';
import Img5 from './images/TSE.png';
import Img6 from './images/Owl-Coder.png';
export default function Component5(){
    return(
        <div className='div22'>
            <div>
                <div className='div23'>
                    <p className='p1'>Programs</p>
                    <h1 className='h02'>Our <br></br>Innovative Programs</h1><br></br><br></br>
                    <div className='div24'>Our creative minds come up with various programs to keep you entertained while you get trained. Some of our most popular programs are mentioned below.</div>
                </div>
                </div>
            <div className='div25'>
                <div class='container-fluid' >
                    <OwlCarousel items={2} className="owl-theme" loop nav margin={8} >
                        <div ><img  className="img" src= {Img1} alt='img1'/></div>
                        <div><img  className="img" src= {Img2} alt='img2'/></div>
                        <div><img  className="img" src= {Img3} alt='img2'/></div>
                        <div><img  className="img" src= {Img4} alt='img2'/></div>
                        <div><img className="img" src= {Img5} alt='img2'/></div>
                        <div><img className="img" src= {Img6} alt='img2'/></div>
                    </OwlCarousel>
                </div>
            </div>
        </div>
    );
}