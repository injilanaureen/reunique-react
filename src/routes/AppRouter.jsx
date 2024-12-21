import React from "react";
import { Routes, Route } from "react-router-dom";
import AboutUs from "../components/aboutus-component/aboutus";
import Header from "../components/header";
import Contact from "../components/contact";
import Support from "../components/support";
import Login from "../components/login"
import SignIn from "../components/signin"
<<<<<<< HEAD
import Grievance from "../components/legal-component/grievance";
import Disclaimer from "../components/legal-component/disclaimer";
import Privacy from "../components/legal-component/privacy";
import Terms from "../components/legal-component/t&c";

=======
import FAQs from "../components/faqs"
import RaiseTicket from "../components/RaiseTicket";
import Careers from "../components/careers";
>>>>>>> 59a66f346733ac3bc57d82ff00b8de122aa150b1
const AppRouter = () => {
  return (
    <Routes>
      <Route path="/about" element={<AboutUs />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/support" element={<Support />} />
      <Route path='/login' element={<Login />} />
      <Route path='/sigin' element={<SignIn />} />
<<<<<<< HEAD
      <Route path='/grievance' element={<Grievance />} />
      <Route path='/disclaimer'element={<Disclaimer/>}/>
      <Route path='/privacy' element={<Privacy/>} />
      <Route path ='/terms' element={<Terms/>}/>
      {/* <Route path='/grievance' element={<Grievance />} />  */}
=======
      <Route path='/faqs' element={<FAQs/>} />
      <Route path='/raiseTicket' element={<RaiseTicket/>} />
      <Route path='/careers' element={<Careers/>} />
>>>>>>> 59a66f346733ac3bc57d82ff00b8de122aa150b1
    </Routes>
  );
};

export default AppRouter;
