import './style.css';
import Img1 from './images/ps (1).png';
import Img2 from './images/dr_c1.png';
import Img3 from './images/vlsi.png';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
export default function Component6(){
    return(
        <div className='div26'>
            <br></br><br></br>
            <center><h3 className='sp1'>Updated News</h3>
            <p className='h22'>Stay tuned to this page to find out what's happening in Technical Hub. You can also check out our social media channels for instant updates.</p></center>
            <CardGroup className='card11'>
                <Card className='card12'>
                    <Card.Img variant="top" src={Img1} className='img22'/>
                    <Card.Body className='cb1'>
                    <Card.Title>Project space</Card.Title>
                    <Card.Text>
                        Project space is a feature rich environment designed to encourage individuals to develop and showcase real-time problems and further find effective solutions that can help overcome them. Every individual who chooses to utilize this space pockets themselves a chance that could possibly get them one step closer to their dream job.
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card className='card12'>
                    <Card.Img variant="top" src={Img2} className='img22'/>
                    <Card.Body className='cb1'>
                    <Card.Title>Drive Ready Connect</Card.Title>
                    <Card.Text>
                    Explore the realm of cutting-edge technologies all in one spot at DRIVE READY CONNECT, exclusively designed for our trainees. Stay engaged and enjoy an unparalleled learning journey with the training provided by Technical Hub. Witness the 20+ technologies at one place and its featured explained by our certified trainees of the respective technologies.
                    </Card.Text>
                    </Card.Body >
                </Card>
                <Card className='card12'>
                    <Card.Img variant="top" src={Img3} className='img22'/>
                    <Card.Body className='cb1'>
                    <Card.Title>VLSI</Card.Title>
                    <Card.Text>
                    Learning VLSI (Very Large Scale Integration) is paramount for students as it introduces them to a transformative technology with vast implications for our digital future. VLSI serves as the backbone of modern electronics, influencing everything from smartphones to smart home devices Acquiring expertise in VLSI not only opens doors to dynamic and in-demand career opportunities in semiconductor design and manufacturing but also positions students at the forefront of technological innovation.
                    </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>
        </div>
    );
}