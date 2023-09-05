import React from "react";
import { useLoaderData } from "react-router-dom";
import { useDispatch} from "react-redux"
import { addToCart } from "../redux/AmazonSlice";
import { isAxiosError } from "axios";


function Product() {

const dispatch = useDispatch()


  const data = useLoaderData();
  const productData = data.data;

  return (
    <div className=" max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:gap-8  gap-6 px-4">
      {productData.map((item) => (
        <div
          key={item.id}
          className=" bg-white h-auto border-[1px] border-gray-200 py-6 z-30 hover:border-transparent shadow-none hover:shadow-textShadow duration-200 relative flex flex-col gap-4 "
        >
          <span className="text-xs capitalize italic absolute top-2 right-2 text-gray-500">
            {item.category}
          </span>
          <div className="w-full h-auto flex items-center justify-center relative group">
            <img
              className=" w-52 h-64 object-contain"
              src={item.image}
              alt=""
            ></img>

            <ul className=" w-full h-36 bg-gray-100 absolute bottom-[-200px]  flex flex-col items-end justify-center gap-2 font-poppins px-2 border-1 border-r group-hover:bottom-0 duration-700 ">
              <li className=" productli">
                Compare
                <span>
                  <i className="fa-brands fa-github"></i>
                </span>
                
              </li>

              <li className=" productli">
                Add to Cart
                <span>
                <i className="fa-solid fa-cart-shopping"></i>
                </span>
                
              </li>

              <li className=" productli">
                Wish to view
                <span>
                <i className="fa-solid fa-heart"></i>
                </span>
                
              </li>

              <li className=" productli">
                View Details
                <span>
                <i className="fa-sharp fa-solid fa-eye"></i>
                </span>
                
              </li>
            </ul>
          </div>
          <div className="px-4 z-10 bg-white">
            <div className="flex items-center justify-between">
              <h2 className=" font-poppins tracking-wide text-lg text-amazon_blue">
                {item.title.substring(0, 20)}
              </h2>
              <p className=" text-sm text-gray-600 font-semibold">
                ${item.price}
              </p>
            </div>
            <div>
              <p className="text-sm">{item.description.substring(0, 60)}...</p>
              <div className=" text-yellow-500">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
            </div>
            <button onClick={()=>dispatch(addToCart({
              id:item.id,
              title:item.title,
              description:item.description,
              price:item.price,
              category:item.category,
              image:item.image,
              quantity:1
            }))} className=" w-full font-poppins font-medium text-base bg-amazon_light text-white py-1.5 rounded-md mt-3">
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Product;
