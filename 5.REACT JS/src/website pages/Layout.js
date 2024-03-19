import { Outlet, Link } from "react-router-dom";
import './nav.css'
const Layout = () => {
  return (
    <>
      <nav>
        <ul  class='ul1'>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li class='l1'>
            <Link to="/Aboutpage">About</Link>
          </li>
          <li class='l1'>
            <Link to="/Loginpage">Login</Link>
          </li>
          <li class='l1'>
            <Link to="/Contactpage">Contact</Link>
          </li>
        </ul>
      </nav>

      <hr></hr>
    <br></br>
      <Outlet />
    </>
  )
};

export default Layout;