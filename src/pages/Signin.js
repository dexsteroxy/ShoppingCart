import React, { useState } from "react";
import amazonLogo from "../assets/amazonLogo.png";
import { Link } from "react-router-dom";
function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //eroor message
  const [errEmail, setErrEmail] = useState("");
  const [errPassword, setErrPassword] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrEmail("");
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setErrPassword("");
  };

 
  const handleLogin = (e) => {
    e.preventDefault();
    if (!email) {
      setErrEmail("Email is required");
    } 

    if (!password) {
      setErrPassword("Password is required");
    }

    if (email && password) {
      console.log(email,password);
      setEmail("")
      setPassword("")
    }
  };
  return (
    <div className="w-full">
      <div className=" w-full bg-gray-100 pb-10">
        <form className="w-[450px] mx-auto flex flex-col items-center">
          <img className="w-32" src={amazonLogo} alt=""></img>
          <div className="w-full border border-zinc-200 p-6">
            <h2 className=" font-poppins text-3xl font-medium mb-4">Sign In</h2>
            <div className=" flex flex-col gap-3">
              <div className=" flex flex-col gap-2">
                <p className=" text-sm font-medium">
                  Email or mobile phone number
                </p>
                <input
                  onChange={handleEmail}
                  value={email}
                  className=" w-full lowercase py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100"
                  type="email"
                />
                {errEmail && (
                  <p className=" text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                    {errEmail}
                  </p>
                )}
              </div>

              <div className=" flex flex-col gap-2">
                <p className=" text-sm font-medium">Password</p>
                <input
                  onChange={handlePassword}
                  value={password}
                  className=" w-full lowercase py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100"
                  type="password"
                />
                {errPassword && (
                  <p className=" text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                    {errPassword}
                  </p>
                )}
              </div>
              <button
                onClick={handleLogin}
                className=" w-full font-poppins font-medium text-base bg-gradient-to-tr from-yellow-400 to-yellow-200 border hover:from-yellow-300 hover:to-yellow-500 border-yellow-500 hover:border-yellow-700 active:bg-gradient-to-bl active:from-yellow-400 active:to-yellow-500 duration-200 py-1.5 rounded-md mt-3"
              >
                Continue
              </button>
            </div>
            <p className=" text-xs text-black leading-4 mt-4">
              By continuing, you agree to Amazon's{" "}
              <span className="text-blue-600">Conditions of Use </span> and{" "}
              <span className="text-blue-600">Privacy Notice.</span>
            </p>
            <p className=" text-xs text-gray-600 mt-4 cursor-pointer group">
              {" "}
              <i className="fa-solid fa-caret-right"></i>
              <span className=" text-blue-600 group-hover:text-orange-700 group-hover:underline underline-offset-1">
                {" "}
                Need help?
              </span>
            </p>
          </div>
          <p className=" w-full text-xs text-gray-600 mt-4 flex  items-center">
            <span className="w-1/3 h-[1px] bg-zinc-400 inline-flex"></span>
            <span className="w-1/3 text-center">New to Amazon?</span>
            <span className="w-1/3 h-[1px] bg-zinc-400 inline-flex"></span>
          </p>
          <Link className="w-full" to="/register">
            <button className=" w-full font-poppins font-normal text-base bg-gradient-to-t from-slate-200 to-slate-100 hover:bg-gradient-to-b border border-zinc-400 active:border-yellow-800 active:shadow-amazonInput duration-200 py-1.5 rounded-sm">
              Create your Amazon account
            </button>
          </Link>
        </form>
      </div>
      <div className=" w-full bg-gradient-to-t from-white via-white to-zinc-200 flex flex-col gap-4 justify-center items-center py-10">
        <div className="flex items-center gap-6 text-sm">
          <p className=" text-blue-600 cursor-pointer hover:text-orange-700 hover:underline underline-offset-1">
            Conditions of Use
          </p>
          <p className=" text-blue-600 cursor-pointer hover:text-orange-700 hover:underline underline-offset-1">
            Privacy Notice{" "}
          </p>

          <p className=" text-blue-600 cursor-pointer hover:text-orange-700 hover:underline underline-offset-1">
            Privacy Notice{" "}
          </p>
        </div>
        <p className="text-xs text-gray-600">
          @ Copy Right &Copy 2023 All Right Reserved
        </p>
      </div>
    </div>
  );
}

export default Signin;
