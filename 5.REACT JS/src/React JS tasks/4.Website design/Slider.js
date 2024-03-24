import Carousel from 'react-bootstrap/Carousel';
import Img1 from './images/dr_c.jpg';
import Img2 from './images/ps.png';
import Img3 from './images/owl_coder_3.0.jpg';
import Img4 from './images/become_coder_darkmode.png';
import Img5 from './images/website.png';
import './style.css'
export default function Slider() {
  return (
    <Carousel >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Img1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Img2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Img3}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Img4}
          alt="Fourth slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Img5}
          alt="Fifth slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}