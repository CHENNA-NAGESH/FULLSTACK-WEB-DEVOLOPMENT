import { Outlet, Link } from "react-router-dom";
import './style.css'
const Layout = () => {
  return (
    <>
      <nav>
        <center><ul className='ul1'>
          <li>
            <Link to="/">LoginForm</Link>
          </li>
          <li>
            <Link to="/SignupPage">Sign UP</Link>
          </li>
        </ul></center>
      </nav>

      <hr></hr>
    <br></br>
      <Outlet />
    </>
  )
};

export default Layout;