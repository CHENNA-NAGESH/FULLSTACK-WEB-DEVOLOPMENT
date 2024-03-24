import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './style.css'
import thublogo from './images/thublogo.png'
function Layout() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <Navbar.Brand href="/">
             <img src={thublogo} alt="Thublogo" width="250" height="70"/> 
          </Navbar.Brand>
          </Nav>
          <Nav>
            <Nav.Link href="/Homepage" className='nav1'>Home</Nav.Link>
            <Nav.Link href="/Aboutpage" className='nav1'>About</Nav.Link>
            <Nav.Link href="/Contactpage" className='nav1'>Contact</Nav.Link>
            <Nav.Link href="/Loginpage" className='nav1'>Login</Nav.Link>
            <Nav.Link href="/Signuppage" className='nav1'>Signup</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Layout;