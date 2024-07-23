import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import TempDashboard from "./Pages/TempDashboard";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";
import ForgotPassword from "./Pages/ForgotPassword";
import DeleteAccount from "./Pages/DeleteAccount";
import EmailSent from "./Pages/EmailSent";
import AccountManagement from "./Pages/AccountManagement";
import bg from "./Images/bg.svg";
import bg1 from "./Images/bg1.svg";
function App() {
  return (
    <div className="App flex flex-col items-center justify-center text-center min-h-screen overflow-hidden bg-[#040b15] relative">
      <img
        src={bg}
        loading="lazy"
        alt="ornament"
        className="absolute top-[-150px] right-[-150px] h-[768px] w-auto"
      />
      <img
        src={bg1}
        loading="lazy"
        alt="ornament"
        className="absolute bottom-[50px] left-[-250px] h-[768px] w-auto opacity-90"
      />
      <Header />
      <div className="w-full max-w-[607px] p-4 md:p-8">
        <Routes>
          <Route path="/" element={<TempDashboard />} />
          <Route path="/Signup" element={<SignUp />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Forgotpassword" element={<ForgotPassword />} />
          <Route path="/DeleteAccount" element={<DeleteAccount />} />
          <Route path="/EmailSent" element={<EmailSent />} />
          <Route path="/AccountManagement" element={<AccountManagement />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
