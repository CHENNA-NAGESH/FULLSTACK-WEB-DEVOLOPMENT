import Img1 from './images/iconc.png';
import Img2 from './images/iconp.png';
import Img3 from './images/iconr.png';
import './style.css';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
export default function Component1(){
    return(
        <div>
            <h3 className="head">What we Offer</h3>
            <center>
            <CardGroup className='card1' >
                <Card className='card2'>
                    <Card.Img variant="left" src={Img1} width={"60px"} height={"60px"} />
                    <Card.Body className='cardb'>
                    <Card.Title>Certification</Card.Title>
                    <Card.Text>
                    We offer a wide range of globally recognized certifications from reputed organizations like Cisco, Red Hat, AWS, Microsoft and Automation Anywhere. These certifications are issued directly by the vendor and are accepted worldwide.
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card className='card2'>
                    <Card.Img variant="left" src={Img3} width={"60px"} height={"60px"}/>
                    <Card.Body className='cardb'>
                    <Card.Title>Placement</Card.Title>
                    <Card.Text>
                    We regularly conduct mock interviews with the help of experienced professionals. These interviews help prepare our trainees for their future placements and help them analyze and upgrade their skills accordingly.
                    </Card.Text>
                    </Card.Body>
                </Card >
                <Card className='card2'>
                    <Card.Img variant="left" src={Img2} width={"60px"} height={"60px"}/>
                    <Card.Body className='cardb'>
                    <Card.Title>Product Development</Card.Title>
                    <Card.Text >
                    Our in-house development team focuses on providing the best to our customers. Whether you're looking for a custom build product or in house automation, our products are guaranteed to help make your work easier.
                    </Card.Text>
                    </Card.Body>
                </Card>
                </CardGroup>
            </center>
        </div>
    );
}
