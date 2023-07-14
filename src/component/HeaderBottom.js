import React, { useState } from "react";
import SideNavContent from "./SideNavContent";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

function HeaderBottom() {
  const [sidebar, setSidebar] = useState(false);
  const userInfo = useSelector((state) => state.amazonReducer.userInfo);
  return (
    <div className=" w-full px-4 h-[36px] bg-amazon_light text-white flex items-center ">
      {/* =========listitems start here ========== */}

      <ul className=" flex items-center gap-2 text-sm tracking-wide">
        <li
          onClick={() => setSidebar(true)}
          className=" headerHover flex items-center gap-1"
        >
          {" "}
          <i className="fa-solid fa-bars"></i> All
        </li>
        <li className=" headerHover hidden md:inline-flex">Today's Deals</li>
        <li className=" headerHover hidden md:inline-flex">
          Customer Services
        </li>
        <li className=" headerHover hidden md:inline-flex">Gift Cards</li>
        <li className=" headerHover hidden md:inline-flex">Registry</li>
        <li className=" headerHover hidden md:inline-flex">Sell</li>
      </ul>

      {/* =========listitems end here ========== */}

      {/* =========sideNav start here ========== */}

      {sidebar && (
        <div className=" z-50  w-full h-screen text-black fixed top-0 left-0 bg-amazon_blue bg-opacity-50">
          <div className="  w-full h-full relative">
            <motion.div
              initial={{ x: -500, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className=" w-[80%] md:w-[350px]  h-full bg-white border border-black"
            >
              <div className=" w-full bg-amazon_light text-white py-2 px-6 flex items-center gap-4">
                {userInfo ? (
                  <img
                    className="w-10 h-10 rounded-full"
                    src={userInfo.image}
                    alt=""
                  />
                ) : (
                  <i className="fa-solid fa-user"></i>
                )}

             {
              userInfo ?    <h3 className=" font-poppins font-bold text-lg tracking-wide">
              {userInfo.userName}
            </h3> : (
                 <h3 className=" font-poppins font-bold text-lg tracking-wide">
                 Hello, Sign In
               </h3>
            )
             }
              </div>
              <SideNavContent
                title="Digital Content & Devices"
                one="Amazon Music"
                two="Kindle E-readers & Books"
                three="Amazon Appstore"
              />
              <SideNavContent
                title="Shop By Department"
                one="Electronics"
                two="Computers"
                three="Smart Home"
              />
              <SideNavContent
                title="Programs & Features"
                one="Gift Cards"
                two="Amazon Live"
                three="International Shopping"
              />

              <SideNavContent
                title="Help & Settings"
                one="Your Account"
                two="Customer Service"
                three="Contact US"
              />

              <span
                onClick={() => setSidebar(false)}
                className=" cursor-pointer absolute top-0 left-[82%] md:left-[360px] w-10 h-10 text-black flex items-center justify-center border bg-gray-200 hover:bg-red-500 hover:text-white duration-300"
              >
                <i className="fa-solid fa-xmark"></i>
              </span>
            </motion.div>
          </div>
        </div>
      )}
      {/* =========sideNav end here ========== */}
    </div>
  );
}

export default HeaderBottom;
