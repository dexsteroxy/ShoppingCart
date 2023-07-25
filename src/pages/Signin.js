import React, { useState } from "react";
import amazonLogo from "../assets/amazonLogo.png";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { RotatingLines } from "react-loader-spinner";
import { useDispatch } from "react-redux";
import { setUserInfo } from "../redux/AmazonSlice";
// https://www.youtube.com/watch?v=7r0UnNFDmAo

function Signin() {
  const dispatch = useDispatch()
  const auth = getAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //eroor message
  const [errEmail, setErrEmail] = useState("");
  const [errPassword, setErrPassword] = useState("");
  //firebase error
  const [userEmailErr, setUserEmailErr] = useState("");
  const [userPassErr, setUserPassErr] = useState("");

  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

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
      setLoading(true);
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          //signed in
          const user = userCredential.user;
       dispatch(setUserInfo({
        _id:user.uid,
        userName:user.displayName,
        email:user.email,
        image:user.photoURL
       }))
          //....
          setLoading(false);
          setSuccessMsg("Logged Successfully! Welcome Our Customer! ");
          setTimeout(() => {
            navigate("/");
          }, 2000);
        })
        .catch((error) => {
          setLoading(false);
          const errorCode = error.code;
          if (errorCode.includes("auth/invalid-email")) {
            setUserEmailErr("Email must match with the one that you use to create the account");
          }
          if (errorCode.includes("auth/wrong-password")) {
            setUserPassErr("Wrong password! try again");
          }
         
        });
      setEmail("");
      setPassword("");
    }
  };
  return (
    <div className="w-full">
      <div className=" w-full bg-gray-100 pb-10">
        {successMsg ? (
          <div className=" w-full flex justify-center items-center py-32">
            <p className=" border-[1px] border-green-600 text-green-500 font-poppins text-lg font-semibold px-6 py-2">
              {successMsg}
            </p>
          </div>
        ) : (
          <form className="w-[300px] md:w-[450px] mx-auto flex flex-col items-center">
            <h1 className=" hidden sml:inline-flex text-4xl font-semibold italic">Dexs<span className="text-cyan-600">tero</span>xy</h1>
            <div className="w-full border border-zinc-200 p-6">
              <h2 className=" font-poppins text-3xl font-medium mb-4">
                Sign In
              </h2>
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

                  {userEmailErr && (
                    <p className=" text-red-600 text-xs font-semibold tracking-wide flex items-center ">
                      {userEmailErr}
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

                  {userPassErr && (
                    <p className=" text-red-600 text-xs font-semibold tracking-wide flex items-center">
                      {userPassErr}
                    </p>
                  )}
                </div>
                <button
                  onClick={handleLogin}
                  className=" w-full font-poppins font-medium text-base bg-gradient-to-tr from-cyan-400 to-cyan-200 border hover:from-cyan-300 hover:to-cyan-500 border-cyan-500 hover:border-cyan-700 active:bg-gradient-to-bl active:from-cyan-400 active:to-cyan-500 duration-200 py-1.5 rounded-md mt-3"
                >
                  Continue
                </button>
                {loading && (
                  <div className=" flex justify-center">
                    <RotatingLines
                      strokeColor="#febd69"
                      strokeWidth="5"
                      animationDuration="0.75"
                      width="50"
                      visible={true}
                    />
                  </div>
                )}
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
              <span className="w-1/3 hidden h-[1px] bg-zinc-400 md:inline-flex"></span>
              <span className=" md:w-1/3 text-center">New to Amazon?</span>
              <span className="w-1/3 h-[1px] bg-zinc-400 hidden md:inline-flex"></span>
            </p>
            <Link className="w-full" to="/register">
              <button className=" w-52 md:w-full font-poppins font-normal text-base bg-gradient-to-t from-slate-200 to-slate-100 hover:bg-gradient-to-b border border-zinc-400 active:border-yellow-800 active:shadow-amazonInput duration-200 py-1.5 rounded-sm">
                Create <span className=" hidden md:inline-flex"> your</span> Amazon account
              </button>
            </Link>
          </form>
        )}
      </div>
      <div className=" w-full bg-gradient-to-t from-white via-white to-zinc-200 flex flex-col gap-4 justify-center items-center py-10">
        <div className="flex items-center gap-6 text-sm">
          <p className=" text-blue-600 text-sm cursor-pointer hover:text-orange-700 hover:underline underline-offset-1">
            Conditions <span className=" hidden md:flex">of Use</span>  
          </p>
          <p className=" text-blue-600 text-sm cursor-pointer hover:text-orange-700 hover:underline underline-offset-1">
            Privacy <span className=" hidden md:flex">Notice</span> 
          </p>

          <p className=" text-blue-600 text-sm cursor-pointer hover:text-orange-700 hover:underline underline-offset-1">
            Privacy <span className=" hidden md:flex">Notice</span> {" "}
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
