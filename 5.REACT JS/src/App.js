import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignupForm from "./React JS tasks/3.Login and signup form using bootstrap/SignupForm";
import LoginForm from "./React JS tasks/3.Login and signup form using bootstrap/LoginForm";
import Layout from "./React JS tasks/3.Login and signup form using bootstrap/Layout";
import NoPage from "./React JS tasks/3.Login and signup form using bootstrap/NoPage";
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