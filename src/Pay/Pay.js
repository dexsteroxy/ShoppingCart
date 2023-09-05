import React from "react";
import congrat from "../assets/congrat.gif";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Pay() {
  const userInfo = useSelector((state) => state.amazonReducer.userInfo);
  return (
    <div className=" bg-white">
      <div className=" w-full flex justify-center items-center p-3 mt-4">
        <h1 className=" font-semibold font-poppins text-2xl">
          Thank you {userInfo.userName} for shopping with us
        </h1>
      </div>
      <div className="w-full flex justify-center  items-center p-3">
        <p className=" text-sm md:text-base font-poppins">
          Once again thank you for shopping with us please share this site with
          your friends
          <br />
          and also keep in touch with us to know when our new product will be
          available.
        </p>
      </div>
      <div className=" w-full flex justify-center  items-center p-3">
        <img src={congrat} className="h-[300px]" alt="" />
      </div>
      <div className=" w-full flex justify-center  items-center p-3">
        <Link to="/">
          <button className=" md:mt-6 bg-cyan-500  rounded-md cursor-pointer hover:bg-cyan-600  active:bg-cyan-700   px-8 py-2 font-poppins font-semibold text-sm">
            Back to Home
          </button>
        </Link>
      </div>
      <p className="text-cyan-600 bg-gray-200 h-[190px] md:px-3 p-3 ">
        See you next time {userInfo.userName}
      </p>
    </div>
  );
}

export default Pay;
