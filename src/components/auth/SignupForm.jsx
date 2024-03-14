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
        Daftar Sekarang!</h3>
      <p className="mb-10 text-dark-midnight-blue font-sans">Buat akun anda di BREECE</p>

      <form className="flex flex-col">
      <p className="text-dark-midnight-blue text-lg">Nama</p>
      <Input
      type="nama"
      label={"Masukkan nama"}
      name={"nama"}
      onChange={(e) => setForm({...form, nama: e.target.value})}
      required={true}
      ></Input>
      <p className="mt-4 text-dark-midnight-blue text-lg">Alamat email</p>
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
      <Button
      type={"submit"}
      variation={""}
      className={"w-96 mt-10 h-12 my-4 bg-dark-midnight-blue text-white"}
      onClick={() => navigate("/")}
      ><a href="/login">Daftar</a></Button>
      </form>
    </div>  
  );
  
}

export default LoginForm;