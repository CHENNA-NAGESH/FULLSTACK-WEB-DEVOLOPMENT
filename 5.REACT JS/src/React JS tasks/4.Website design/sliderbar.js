import Carousel from 'react-bootstrap/Carousel';
import Img1 from './images/dr_c.jpg'
import Img2 from './images/ps.png'
import Img3 from './images/owl_coder_3.0.jpg'
function Slidebar() {
  return (
    <Carousel slide={false}>
      <Carousel.Item>
        <img src={Img1} alt='img1'/>
      </Carousel.Item>
      <Carousel.Item>
        <img src={Img2} alt='img2'/>
      </Carousel.Item>
      <Carousel.Item>
        <img src={Img3} alt='img3'/>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slidebar;