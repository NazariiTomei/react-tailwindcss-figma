import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";
import ForgotPassword from "./Pages/ForgotPassword";
import DeleteAccount from "./Pages/DeleteAccount";
import EmailSent from "./Pages/EmailSent";
import AccountManagement from "./Pages/AccountManagement";
function App() {
  return (
    <div className="App flex flex-col items-center justify-center text-center min-h-screen overflow-hidden bg-[#040b15]">
      <img
        src="https://cdn.prod.website-files.com/6645467023458681dcb2a173/66454dd60ca2375ed24c3edb_Ellipse%2066.svg"
        loading="lazy"
        alt="ornament"
        className="image-2 absolute top-[-150px] right-[-150px] h-[768px] w-auto"
      />
      <img
        src="https://cdn.prod.website-files.com/6645467023458681dcb2a173/66454bd0a0fc264b9c5a1460_Ellipse%206.svg"
        loading="lazy"
        alt="ornament"
        className="image absolute bottom-[50px] left-[-250px] h-[768px] w-auto opacity-90"
      />
      <Header />
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/Signup" element={<SignUp />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Forgotpassword" element={<ForgotPassword />} />
        <Route path="/DeleteAccount" element={<DeleteAccount />} />
        <Route path="/EmailSent" element={<EmailSent />} />
        <Route path="/AccountManagement" element={<AccountManagement />} />
      </Routes>
    </div>
  );
}

export default App;
