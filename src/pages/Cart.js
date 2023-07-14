import React, { useEffect, useState } from "react";
import Header from "../component/Header";
import Footer from "../footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementQuantity,
  deleteItem,
  incrementQuantity,
  resetCart,
} from "../redux/AmazonSlice";
import empty from "../assets/candis.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Cart() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.amazonReducer.products);
  const [totalPrice, setTotalPrice] = useState("");
  useEffect(() => {
    let Total = 0;
    products.map((item) => {
      Total += item.price * item.quantity;
      return setTotalPrice(Total.toFixed(2));
    });
  }, [products]);

  return (
    <div>
      <Header />
      <div className=" w-full bg-gray-100 p-4">
        {products.length > 0 ? (
          <div className=" container mx-auto h-auto grid mdl:grid-cols-5  mdl:gap-8">
            <div className=" w-full h-full bg-white px-4 col-span-4">

              <div className=" font-poppins flex items-center justify-between border-b-[1px] border-b-gray-400 py-3">
                <h2 className=" text-2xl font-medium">Shopping Cart</h2>
                <h4 className=" text-xl hidden md:flex font-normal">Subtile</h4>
              </div>
              {/* product start her  */}
              <div>
                {products.map((item) => (
                  <div
                    key={item.id}
                    className=" w-full border-b-[1px] border-b-gray-300 p-4 flex items-center gap-6"
                  >
                    <div className=" w-full mdl:flex mdl:justify-between items-center gap-6">
                      <div className=" mdl:w-1/5">
                        <img
                          className=" w-full h-44 object-contain"
                          src={item.image}
                          alt=""
                        />
                      </div>
                      <div className=" mdl:w-3/5">
                        <h2 className=" font-semibold text-lg">{item.title}</h2>
                        <p className="text-sm">
                          {item.description.substring(0, 86)}...
                        </p>
                        <p className="text-base">
                          Unit Price{" "}
                          <span className=" font-semibold">${item.price}</span>
                        </p>
                        <div className=" bg-[#F0F2F2] flex justify-center items-center gap-1 w-24 py-1 text-center drop-shadow-lg rounded-md">
                          <p>Qty:</p>
                          <p
                            onClick={() => dispatch(decrementQuantity(item.id))}
                            className=" cursor-pointer bg-gray-200 px-1 rounded-md hover:bg-gray-400 duration-300"
                          >
                            -
                          </p>
                          <p>{item.quantity}</p>
                          <p
                            onClick={() => dispatch(incrementQuantity(item.id))}
                            className=" cursor-pointer bg-gray-200 px-1 rounded-md hover:bg-gray-400 duration-300"
                          >
                            +
                          </p>
                        </div>
                        <button
                          onClick={() => dispatch(deleteItem(item.id))}
                          className=" bg-red-500 w-36 py-1 rounded-lg text-white mt-2 hover:bg-red-700 active:bg-red-900 duration-300"
                        >
                          Delete Item
                        </button>
                      </div>
                      <div>
                        <p className=" text-lg font-poppins font-semibold">
                          ${item.price * item.quantity}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div
                onClick={() => dispatch(resetCart())}
                className="w-full py-2"
              >
                <button className=" bg-red-500 w-36 py-1 rounded-lg text-white mt-2 hover:bg-red-700 active:bg-red-900 duration-300">
                  Clear Cart
                </button>
              </div>
            </div>
            <div className=" w-full  lg:h-52 md:h-28   bg-white col-span-1 mt-6 md:flex flex-col items-center justify-center p-2 ">
              <div>
                <p className="lg:flex hidden gap-2 items-start text-xs">
                  <span className=" bg-white hidden mdl:flex text-green-500 text-xl rounded-full">
                    <i className="fa-solid fa-circle-check"></i>
                  </span>
                  Your order qualifies for FREE shipping Choose this option at
                  checkout details....
                </p>
              </div>
              <div>
                <p className="  font-semibold text-sm gap-1 py-1 flex items-center justify-between">
                  Total:{" "}
                  <span className="text-sm font-bold">${totalPrice}</span>
                </p>
              </div>
              <button className=" w-full font-poppins font-medium text-sm bg-gradient-to-tr from-yellow-400 to-yellow-200 border hover:from-yellow-300 hover:to-yellow-500 border-yellow-500 hover:border-yellow-700 active:bg-gradient-to-bl active:from-yellow-400  active:to-yellow-500 duration-200 py-1.5 rounded-md mt-3">
                <span className=" hidden lg:inline-flex"> Proceed to </span> Pay
              </button>
            </div>
          </div>
        ) : (
          <motion.div
            initial={{ y: 70, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex  justify-center items-center gap-4 py-10"
          >
            <div>
              <img
                className=" w-80 rounded-lg p-4 mx-auto"
                src={empty}
                alt=""
              />
            </div>
            <div className=" w-96 p-4 bg-white flex flex-col items-center rounded-md shadow-lg">
              <h1 className=" font-poppins text-xl font-bold">
                You don't have any item please
              </h1>
              <p className="text-sm text-center">
                Your Shopping cart lives to serve. Give it purpose - fill it
                with books, electronics, videos, etc. and make it happy.
              </p>
             <Link to='/'>

             <button className=" mt-6 bg-yellow-400 rounded-md cursor-pointer hover:bg-yellow-500 active:bg-yellow-700 px-8 py-2 font-poppins font-semibold text-sm">
                Continue Shopping
              </button>
             </Link>
            </div>
          </motion.div>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default Cart;
