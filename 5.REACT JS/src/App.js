import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./React JS tasks/2.login and signup pages/LoginPage";
import SignupForm from "./React JS tasks/2.login and signup pages/SignupPage";
import Layout from "./React JS tasks/2.login and signup pages/Layout";
import NoPage from "./React JS tasks/2.login and signup pages/NoPage";
function MyFunction(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LoginForm />} />
          <Route path="SignupPage" element={<SignupForm />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default MyFunction;