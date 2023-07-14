import React, { useState } from "react";
import amazonLogo from "../assets/amazonLogo.png";
import HeaderBottom from "./HeaderBottom";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
function Header() {
  const [showAll, setShowAll] = useState(false);

  const products = useSelector((state) => state.amazonReducer.products);
  const userInfo = useSelector((state) => state.amazonReducer.userInfo);

  return (
    <div className=" w-full sticky top-0 z-50">
      <div className=" w-full bg-amazon_blue text-white px-4 py-3 flex items-center gap-4">
        {/* =====image start here====== */}
        <Link to="/">
          <div className=" px-2 h-[80%] flex items-center border border-transparent hover:border-white cursor-pointer transition-all duration-300">
            <img className=" w-24 mt-" src={amazonLogo} alt="logo"></img>
          </div>
        </Link>

        {/* =====image end here====== */}

        {/* =====delivering start here====== */}

        <div className=" hidden mdl:inline-flex px-2 h-[80%] items-center border  border-transparent hover:border-white cursor-pointer transition-all duration-300">
          <i className="fa-solid fa-location-dot"></i>
          <p className=" text-sm text-lightText font-medium flex flex-col">
            {" "}
            Deliver to{" "}
            <span className="text-sm text-whiteText font-semibold -mt-1">
              Oman
            </span>
          </p>
        </div>

        {/* =====delivering end here====== */}

        {/* =====seach start here====== */}

        <div className="h-10 rounded-md hidden lgl:flex flex-grow relative ">
          <span
            onClick={() => setShowAll(!showAll)}
            className="w-14 h-full bg-gray-200 hover:bg-gray-300 border-2 cursor-pointer duration-300 text-sm text-amazon_blue font-mono flex items-center justify-center rounded-tl-md rounded-bl-md"
          >
            All<span></span>
            <i className="fa-sharp fa-solid fa-caret-down"></i>
          </span>

          {showAll && (
            <div>
              <ul className=" absolute w-56 h-80 top-10 left-0 overflow-y-scroll overflow-x-hidden bg-white border-[1px] border-amazon_blue text-black p-2 flex-col gap-1 z-50">
                {/* ============================================================== */}
                <li className="text-sm tracking-wide font-serif border-b-[1px] border-b-transparent hover:border-b-amazon_blue cursor-pointer duration-200">
                  All department
                </li>
                <li className="text-sm tracking-wide font-serif border-b-[1px] border-b-transparent hover:border-b-amazon_blue cursor-pointer duration-200">
                  educational
                </li>

                <li className="text-sm tracking-wide font-serif border-b-[1px] border-b-transparent hover:border-b-amazon_blue cursor-pointer duration-200">
                  Sport wears
                </li>

                <li className="text-sm tracking-wide font-serif border-b-[1px] border-b-transparent hover:border-b-amazon_blue cursor-pointer duration-200">
                  Shoe
                </li>

                <li className="text-sm tracking-wide font-serif border-b-[1px] border-b-transparent hover:border-b-amazon_blue cursor-pointer duration-200">
                  jacket/hoddy
                </li>

                <li className="text-sm tracking-wide font-serif border-b-[1px] border-b-transparent hover:border-b-amazon_blue cursor-pointer duration-200">
                  cap/hat/capwarmer
                </li>

                <li className="text-sm tracking-wide font-serif border-b-[1px] border-b-transparent hover:border-b-amazon_blue cursor-pointer duration-200">
                  musical instrument
                </li>

                <li className="text-sm tracking-wide font-serif border-b-[1px] border-b-transparent hover:border-b-amazon_blue cursor-pointer duration-200">
                  All department
                </li>
                <li className="text-sm tracking-wide font-serif border-b-[1px] border-b-transparent hover:border-b-amazon_blue cursor-pointer duration-200">
                  educational
                </li>

                <li className="text-sm tracking-wide font-serif border-b-[1px] border-b-transparent hover:border-b-amazon_blue cursor-pointer duration-200">
                  Sport wears
                </li>

                <li className="text-sm tracking-wide font-serif border-b-[1px] border-b-transparent hover:border-b-amazon_blue cursor-pointer duration-200">
                  Shoe
                </li>

                <li className="text-sm tracking-wide font-serif border-b-[1px] border-b-transparent hover:border-b-amazon_blue cursor-pointer duration-200">
                  jacket/hoddy
                </li>

                <li className="text-sm tracking-wide font-serif border-b-[1px] border-b-transparent hover:border-b-amazon_blue cursor-pointer duration-200">
                  cap/hat/capwarmer
                </li>

                <li className="text-sm tracking-wide font-serif border-b-[1px] border-b-transparent hover:border-b-amazon_blue cursor-pointer duration-200">
                  musical instrument
                </li>

                <li className="text-sm tracking-wide font-serif border-b-[1px] border-b-transparent hover:border-b-amazon_blue cursor-pointer duration-200">
                  All department
                </li>
                <li className="text-sm tracking-wide font-serif border-b-[1px] border-b-transparent hover:border-b-amazon_blue cursor-pointer duration-200">
                  educational
                </li>

                <li className="text-sm tracking-wide font-serif border-b-[1px] border-b-transparent hover:border-b-amazon_blue cursor-pointer duration-200">
                  Sport wears
                </li>

                <li className="text-sm tracking-wide font-serif border-b-[1px] border-b-transparent hover:border-b-amazon_blue cursor-pointer duration-200">
                  Shoe
                </li>

                <li className="text-sm tracking-wide font-serif border-b-[1px] border-b-transparent hover:border-b-amazon_blue cursor-pointer duration-200">
                  jacket/hoddy
                </li>

                <li className="text-sm tracking-wide font-serif border-b-[1px] border-b-transparent hover:border-b-amazon_blue cursor-pointer duration-200">
                  cap/hat/capwarmer
                </li>

                <li className="text-sm tracking-wide font-serif border-b-[1px] border-b-transparent hover:border-b-amazon_blue cursor-pointer duration-200">
                  musical instrument
                </li>

                <li className="text-sm tracking-wide font-serif border-b-[1px] border-b-transparent hover:border-b-amazon_blue cursor-pointer duration-200">
                  All department
                </li>
                <li className="text-sm tracking-wide font-serif border-b-[1px] border-b-transparent hover:border-b-amazon_blue cursor-pointer duration-200">
                  educational
                </li>

                <li className="text-sm tracking-wide font-serif border-b-[1px] border-b-transparent hover:border-b-amazon_blue cursor-pointer duration-200">
                  Sport wears
                </li>

                <li className="text-sm tracking-wide font-serif border-b-[1px] border-b-transparent hover:border-b-amazon_blue cursor-pointer duration-200">
                  Shoe
                </li>

                <li className="text-sm tracking-wide font-serif border-b-[1px] border-b-transparent hover:border-b-amazon_blue cursor-pointer duration-200">
                  jacket/hoddy
                </li>

                <li className="text-sm tracking-wide font-serif border-b-[1px] border-b-transparent hover:border-b-amazon_blue cursor-pointer duration-200">
                  cap/hat/capwarmer
                </li>

                <li className="text-sm tracking-wide font-serif border-b-[1px] border-b-transparent hover:border-b-amazon_blue cursor-pointer duration-200">
                  musical instrument
                </li>
                {/* ========================================================= */}
              </ul>
            </div>
          )}
          <input
            className="h-full text-base text-amazon_blue flex-grow outline-none border-none px-2"
            type="text"
          />
          <span className="w-12 h-full flex items-center justify-center bg-amazon_yellow hover:bg-[#f3a847] duration-300 transition-all text-amazon_blue cursor-pointer rounded-tr-md rounded-br-md">
            <i className="fa-solid fa-magnifying-glass fa-beat"></i>
          </span>
        </div>

        {/* =====sarch end here====== */}

        {/* =====signin start here====== */}

        <Link to="/signin">
          <div className="  flex flex-col items-start justify-center headerHover">
            {userInfo ? (
              
                
                <p className="text-sm mdl:text-sm text-gray-100 mdl:text-gray-100 font-medium">
                  {userInfo.userName}
                
                </p>
            
            ) : (
              <p className="text-sm mdl:text-xs text-white mdl:text-lightText font-light">
                <span className="mdl:inline-flex hidden">Hello</span>sign..in
              </p>
            )}

            <p className="text-sm font-semibold -mt-1 text-whiteText hidden mdl:inline-flex">
              Accounts & lists
              <span>
                <i className="fa-sharp fa-solid fa-caret-down"></i>
              </span>
            </p>
          </div>
        </Link>
        {/* =====signin end here====== */}

        {/* =====order start here====== */}

        <div className=" hidden lgl:flex flex-col items-start justify-center headerHover">
          <p className=" text-xs text-lightText font-light">Returns</p>
          <p className="text-sm font-semibold -mt-1 text-whiteText">& Orders</p>
        </div>

        {/* =====order end here====== */}

        {/* =====cart start here====== */}

        <Link to="/cart">
          <div className=" flex  items-start justify-center headerHover relative">
            <i className="fa-solid fa-cart-shopping"></i>
            <p className=" text-xs font-semibold mt-3 text-whiteText ">
              Cart{" "}
              <span className=" absolute text-xs top-0 left-6 font-semibold p-1 h-4 bg-[#f3a847] text-amazon_blue rounded-full flex justify-center items-center animate-bounce">
                {" "}
                {products.length > 0 ? products.length : 0}
              </span>
            </p>
          </div>
        </Link>

        {/* =====cart end here====== */}
      </div>
      <HeaderBottom />
    </div>
  );
}

export default Header;
