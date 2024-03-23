import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./React JS tasks/4.Website design/Layout";
import About from "./React JS tasks/4.Website design/Aboutpage";
import Contact from "./React JS tasks/4.Website design/Contactpage";
import Home from "./React JS tasks/4.Website design/Homepage";
import SignupForm from "./React JS tasks/4.Website design/Signuppage";
import LoginForm from "./React JS tasks/4.Website design/Loginpage";
import NoPage from "./React JS tasks/4.Website design/NoPage";
function MyFunction(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Aboutpage" element={<About />} />
          <Route path="Contactpage" element={<Contact />} />
          <Route path="Loginpage" element={<LoginForm />} />
          <Route path="SignupPage" element={<SignupForm />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default MyFunction;