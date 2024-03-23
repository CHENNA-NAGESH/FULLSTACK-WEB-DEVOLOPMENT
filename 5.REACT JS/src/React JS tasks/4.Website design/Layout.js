import { Outlet, Link } from "react-router-dom";
import './style.css'
import thub from './images/thublogo.png'
const Layout = () => {
  return (
    <>
      <nav class='na1'>
          <img src= {thub} alt="logo"  class='img1'/>
        <center><ul class='ul1'>
          <li class='l1'>
            <Link to="/">Home</Link>
          </li>
          <li class='l1'>
            <Link to="/Aboutpage">About</Link>
          </li>
          <li class='l1'>
            <Link to="/Contactpage">Contact</Link>
          </li>
          <li class='l1'>
            <Link to="/Loginpage">Login</Link>
          </li>
          <li class='l1'>
            <Link to="/Signuppage">Signup</Link>
          </li>
        </ul></center>
      </nav>

      <hr></hr>
      <Outlet />
    </>
  )
};

export default Layout;