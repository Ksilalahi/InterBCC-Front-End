import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { handleLogin } from "../../services/auth";

const LoginForm = () => {
  const navigate = useNavigate();
  const [form, setForm]= useState({
    email: "",
    password: ""
  })

  const handleSubmit = async (e)=>{
    e.preventDefault();
    console.log(form);
    try {
      const response = await handleLogin[form];
      console.log(response);
      // setTimeout(()=>{
      //   navigate("/")
      // }, 1000)
      
    } catch (error) {
      console.log(error);
    }

  }

  return (
    <div className="pt-28 pl-16 w-1/2 mx-4">
      <h3 className="text-4xl font-semibold font-sans text-dark-midnight-blue">
        Selamat Datang!</h3>
      <p className="mb-10 text-dark-midnight-blue font-sans">Tidak punya akun? <a href="/signup" className="text-azure">
        Daftar</a></p>

      <form className="flex flex-col">
      <p className="text-dark-midnight-blue text-lg">Alamat email</p>
      <Input
      type="email"
      label={"e.g.breece@gmail.com"}
      name={"email"}
      onChange={(e) => setForm({...form, email: e.target.value})}
      required={true}
      ></Input>
      <p className="mt-4 text-dark-midnight-blue text-lg">Password</p>
      <Input
      type="password"
      label={"Masukkan password"}
      name={"password"}
      onChange={(e) => setForm({...form, pasword: e.target.value})}
      required={true}
      ></Input>
      <p className="mt-4 text-dark-midnight-blue">Ingat saya <a href="" className="pl-48 text-dark-midnight-blue">Lupa Password?</a></p>
      <Button
      type={"submit"}
      variation={""}
      className={"w-96 h-12 my-4 bg-dark-midnight-blue text-white"}
      onClick={() => navigate("/home")}
      >Masuk</Button>
      </form>
    </div> 
  );
  
}

export default LoginForm;