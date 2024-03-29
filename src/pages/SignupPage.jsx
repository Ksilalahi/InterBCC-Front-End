import React from "react";
import MainLayout from "../components/Layout/MainLayout";
import SignupForm from "../components/auth/SignupForm";

const SignupPage = () => {
  return (
    <MainLayout>
      <main className="flex flex-col w-screen">
        <SignupForm/>
      </main>
    </MainLayout>
  );
}

export default SignupPage;