import React from "react";
import { Routes, Route } from "react-router-dom";
import AboutUs from "../components/aboutus-component/aboutus";
import Contact from "../components/contact";
import Support from "../components/support";
import Login from "../components/login"
import SignIn from "../components/signin"
import Grievance from "../components/legal-component/grievance";
import Disclaimer from "../components/legal-component/disclaimer";
import Privacy from "../components/legal-component/privacy";
import Terms from "../components/legal-component/t&c";
import FAQs from "../components/faqs"
import RaiseTicket from "../components/RaiseTicket";
import Careers from "../components/careers";
import Home from "../components/home";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<AboutUs />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/support" element={<Support />} />
      <Route path='/login' element={<Login />} />
      <Route path='/sigin' element={<SignIn />} />
      <Route path='/grievance' element={<Grievance />} />
      <Route path='/disclaimer'element={<Disclaimer/>}/>
      <Route path='/privacy' element={<Privacy/>} />
      <Route path ='/terms' element={<Terms/>}/>
      <Route path='/faqs' element={<FAQs/>} />
      <Route path='/raiseTicket' element={<RaiseTicket/>} />
      <Route path='/careers' element={<Careers/>} />
    </Routes>
  );
};

export default AppRouter;
