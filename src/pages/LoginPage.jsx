import React from "react";
import MainLayout from "../components/Layout/MainLayout";
import LoginForm from "../components/auth/LoginForm";

const LoginPage = () => {
  return (
    <MainLayout>
      <main className=" flex flex-col w-screen">
      <LoginForm/>
      </main>
    </MainLayout>
  );
}

export default LoginPage;