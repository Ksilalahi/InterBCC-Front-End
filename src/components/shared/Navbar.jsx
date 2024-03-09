import React from "react";
import Button from "../ui/Button";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const isAuthenticated = useAuth();
    const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 z-20 w-full flex justify-center items-center p-4 bg-white shadow-md">
        <div className="w-screen px-3 md:px-5 2xl:w-[1440px] flex justify-between">
            <div className="flex gap-2 md:gap-4 items-center">
                <h6 className="font-bold text-sm md:text-xl">BREECE</h6>
            </div>
            <div className="flex gap-2 md:gap-5 items-center">
                <a className="text-sm md:text-lg" href="">Home </a>
                <a className="text-sm md:text-lg" href="">My event </a>
                <a className="text-sm md:text-lg" href="">About us</a>
            </div>
            <div className="flex gap-2 md:gap-4">
                <Button
                    type={"button"}
                    variation={"primary"}
                    onClick={() => console.log("klik")}
                >Sign up</Button>
                {isAuthenticated ? (
                <Button
                    type={"button"}
                    variation={"secondary"}
                    onClick={() => [navigate]}
                >Log Out</Button>
                ) : (
                    <Button
                    type={"button"}
                    variation={"secondary"}
                    onClick={() => navigate("/login")}
                >Log in</Button>
                )}
            </div>
        </div>
    </nav>
  );
};

export default Navbar;