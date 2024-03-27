import React,{Component} from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Img1 from './images/juniper devops.png';
import Img2 from './images/Azure ai fundamentals.png';
import Img3 from './images/ceh.png';
import Img4 from './images/comptiasecurity.png';
import Img5 from './images/UnityCertifiedAssociate.png';
import Img6 from './images/awssolarc.png';
import Img7 from './images/rhce.png';
import Img8 from './images/devnet-associate.png';
import Img9 from './images/MTA_Python.png';
import Img10 from './images/CCNA_routing_switching.png';
import './style.css';
export class Owl extends Component {
        render()
        {
          return (
            <div>
       <div class='container-fluid' >
        <OwlCarousel items={3} className="owl-theme" loop nav margin={8} >
           <div ><img  className="img" src= {Img1} alt='img1'/></div>
           <div><img  className="img" src= {Img2} alt='img2'/></div>
           <div><img  className="img" src= {Img3} alt='img2'/></div>
           <div><img  className="img" src= {Img4} alt='img2'/></div>
           <div><img className="img" src= {Img5} alt='img2'/></div>
           <div><img className="img" src= {Img6} alt='img2'/></div>
           <div><img className="img" src= {Img7} alt='img2'/></div>
           <div><img className="img" src= {Img8} alt='img2'/></div>
           <div><img className="img" src= {Img9} alt='img2'/></div>
           <div><img className="img" src= {Img10} alt='img2'/></div>
      </OwlCarousel>
      </div>
      </div>
          );
        }
      }
export default Owl;