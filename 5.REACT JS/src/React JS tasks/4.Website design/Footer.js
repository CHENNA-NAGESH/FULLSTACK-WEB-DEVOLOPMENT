import './style.css';
import Img1 from './images/thub1.png';
import Img2 from './images/playstore.png';
import Img3 from './images/appstore.png';
export default function Footer(){
    return(
        <div className='d28'>
            <center><div className='d29'>
                <img src={Img1} alt='thubimg' className='img33'></img>
                <div className='d30'>
                    <i class="fa-brands fa-linkedin-in fa-xl" id='ic1' style={{color:"#d6d6d6"}}></i>
                    <i class="fa-brands fa-youtube fa-xl icon1" style={{color:"#d6d6d6"}}></i>
                    <i class="fa-brands fa-square-instagram fa-xl icon1" style={{color:"#d6d6d6"}}></i>
                    <i class="fa-brands fa-facebook-f fa-xl icon1" style={{color:"#d6d6d6"}}></i>
                    <i class="fa-brands fa-whatsapp fa-xl icon1" style={{color:"#d6d6d6"}}></i>
                </div>
                <center><div className='d31'>
                    <img src={Img2} alt='playstore' className='img6'></img>
                    <img src={Img3} alt='appstore' className='img6'></img>
                </div></center>
            </div></center>
            <div className='d32'>
                <h6>USEFUL LINKS</h6>
                <ul className='ul3'>
                    <li className='li3'>Refund Policy</li>
                    <li className='li3'>Privacy Policy</li>
                    <li className='li3'>Terms & Conditions</li>
                </ul>
            </div>
        </div>
    );
}