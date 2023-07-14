import React, { useState } from "react";
import amazonLogo from "../assets/amazonLogo.png";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";
import { motion } from "framer-motion";
function Register() {
  const navigate = useNavigate();
  const auth = getAuth();
  const [clientName, setClientName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");

  //error massages start here

  const [errClientName, setErrClientName] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errPassword, setErrPassword] = useState("");
  const [errCPassword, setErrCPassword] = useState("");
  const [firebaseErr, setFirebaseErr] = useState("");
  //loading function start
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  // handle function start
  const handleName = (e) => {
    setClientName(e.target.value);
    setErrClientName("");
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrEmail("");
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setErrPassword("");
  };

  const handleCPassword = (e) => {
    setCPassword(e.target.value);
    setErrCPassword("");
  };

  //email validation start
  const emailValidation = (email) => {
    return String(email).toLowerCase().match("@gmail.com");
  };

  //submit button start here

  const handleRegistration = (e) => {
    e.preventDefault();
    if (!clientName) {
      setErrClientName("Your Name Is Required ");
    }
    if (!email) {
      setErrEmail("Email is required");
      setFirebaseErr("");
    } else {
      if (!emailValidation(email)) {
        setErrEmail("Enter a valid email");
      }
    }

    if (!password) {
      setErrPassword("Password is required");
    } else {
      if (password.length < 5) {
        setErrPassword("Password must be at least 6 characters");
      }
    }

    if (!cpassword) {
      setErrCPassword("Confirm your password");
    } else {
      if (cpassword !== password) {
        setErrCPassword("Password must match");
      }
    }

    if (
      clientName &&
      email &&
      emailValidation(email) &&
      password &&
      password.length >= 5 &&
      cpassword &&
      cpassword === password
    ) {
      setLoading(true);
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          updateProfile(auth.currentUser, {
            displayName: clientName,
            photoURL: "7515495b-982d-44d2-9931-5a8bbbf27532",
          });
          //signed in
          const user = userCredential.user;
          
          setLoading(false);
          setSuccessMsg("Account Created Successfully!");
          setTimeout(() => {
            navigate("/signin");
          }, 3000);
          // ..........
        })
        .catch((error) => {
          const errorCode = error.code;
          if (errorCode.includes("auth/email-already-in-use")) {
            setFirebaseErr("Email is already in use please");
          }
          //...
        });
      // ==============firebase end here==================
      setClientName("");
      setEmail("");
      setPassword("");
      setCPassword("");
      setErrCPassword("");
      setFirebaseErr("");
    }
  };

  return (
    <div className=" w-full">
      <div className=" w-full bg-gray-100 pb-10">
        <form className="w-[450px] mx-auto flex flex-col items-center">
          <img className="w-32" src={amazonLogo} alt=""></img>
          <div className="w-full border border-zinc-200 p-6">
            <h2 className=" font-poppins text-2xl font-medium mb-4">
              Create Account
            </h2>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium">Your Name</p>
                <input
                  onChange={handleName}
                  value={clientName}
                  type="text"
                  className=" w-full  py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100"
                />
                {errClientName && (
                  <p className=" text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                    {errClientName}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium">
                  Email or mobile phone number
                </p>
                <input
                  onChange={handleEmail}
                  value={email}
                  type="email"
                  className=" w-full  py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100"
                />
                {errEmail && (
                  <p className=" text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                    {errEmail}
                  </p>
                )}

                {firebaseErr && (
                  <p className=" text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                    {firebaseErr}
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium">Password</p>
                <input
                  onChange={handlePassword}
                  value={password}
                  type="password"
                  className=" w-full  py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100"
                />
                {errPassword && (
                  <p className=" text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                    {errPassword}
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium">Confirm Password</p>
                <input
                  onChange={handleCPassword}
                  value={cpassword}
                  type="password"
                  className=" w-full  py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100"
                />
                {errCPassword && (
                  <p className=" text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                    {errCPassword}
                  </p>
                )}
                <p className="text-xs text-gray-600">
                  Password must be at least 5 characters.
                </p>
              </div>
              <button
                onClick={handleRegistration}
                className=" w-full font-poppins font-medium text-base bg-gradient-to-tr from-yellow-400 to-yellow-200 border hover:from-yellow-300 hover:to-yellow-500 border-yellow-500 hover:border-yellow-700 active:bg-gradient-to-bl active:from-yellow-400 active:to-yellow-500 duration-200 py-1.5 rounded-md mt-3"
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
              {successMsg && (
                <div>
                  <motion.p
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className=" text-base font-poppins font-semibold text-green-500 border-[1px] border-green-500 px-2 text-center"
                  >
                    {successMsg}
                  </motion.p>
                </div>
              )}
            </div>
            <p className=" text-xs text-black leading-4 mt-4">
              By continuing, you agree to Amazon's{" "}
              <span className="text-blue-600">Conditions of Use </span> and{" "}
              <span className="text-blue-600">Privacy Notice.</span>
            </p>
            <div>
              <p className=" text-xs mt-2 text-black">
                Already have an account?
                <Link to="/signin">
                  <span className="text-blue-600 hover:text-orange-600 hover:underline cursor-pointer duration-100 underline-offset-1">
                    Sign in
                    <span>
                      <i className="fa-solid fa-caret-right"></i>
                    </span>
                  </span>
                </Link>
              </p>
              <p className="text-xs text-black ">
                Buying for work{" "}
                <span className="text-blue-600 hover:text-orange-600 hover:underline cursor-pointer duration-100 underline-offset-1">
                  Create a free business account
                </span>
              </p>
            </div>
          </div>
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

export default Register;
