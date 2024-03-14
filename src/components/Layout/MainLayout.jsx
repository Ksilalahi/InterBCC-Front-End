import React from "react";
import Navbar from "../shared/Navbar";
import LoginForm from "../auth/LoginForm";

const MainLayout = ({ children }) => {
  return (
    <div className="">
      
      {children}
    </div>
  );
};

export default MainLayout;
