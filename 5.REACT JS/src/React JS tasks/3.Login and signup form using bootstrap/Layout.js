import { Outlet, Link } from "react-router-dom";
const Layout = () => {
  return (
    <>
      <nav>
        <center><ul>
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