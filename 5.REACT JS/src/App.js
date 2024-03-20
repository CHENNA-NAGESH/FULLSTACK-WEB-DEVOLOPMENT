import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './React JS tasks/1.website pages/Aboutpage'
import Contact from './React JS tasks/1.website pages/Contactpage'
import Home from './React JS tasks/1.website pages/Homepage'
import LoginForm from './React JS tasks/1.website pages/Loginpage'
import Layout from './React JS tasks/1.website pages/Layout';
import NoPage from "./React JS tasks/1.website pages/NoPage";
function MyFunction(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Contactpage" element={<Contact />} />
          <Route path="Loginpage" element={<LoginForm />} />
          <Route path="Aboutpage" element={<About />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default MyFunction;