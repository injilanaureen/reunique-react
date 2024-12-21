import React from "react";
import { Routes, Route } from "react-router-dom";
import AboutUs from "../components/aboutus-component/aboutus";
import Header from "../components/header";
import Contact from "../components/contact";
import Support from "../components/support";
import Login from "../components/login"
import SignIn from "../components/signin"
import Grievance from "../components/legal-component/grievance";
import Disclaimer from "../components/legal-component/disclaimer";
import Privacy from "../components/legal-component/privacy";
import Terms from "../components/legal-component/t&c";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/about" element={<AboutUs />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/support" element={<Support />} />
      <Route path='/login' element={<Login />} />
      <Route path='/sigin' element={<SignIn />} />
      <Route path='/grievance' element={<Grievance />} />
      <Route path='/disclaimer'element={<Disclaimer/>}/>
      <Route path='/privacy' element={<Privacy/>} />
      <Route path ='/terms' element={<Terms/>}/>
      {/* <Route path='/grievance' element={<Grievance />} />  */}
    </Routes>
  );
};

export default AppRouter;
