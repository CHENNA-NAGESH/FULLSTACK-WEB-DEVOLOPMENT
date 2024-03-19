import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './website pages/Aboutpage'
import Contact from './website pages/Contactpage'
import Home from './website pages/Homepage'
import LoginForm from './website pages/Loginpage'
import Layout from './website pages/Layout';
import NoPage from "./website pages/NoPage";
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


