// import React, { useState } from "react";
// import Slider from "react-slick";

// import pair from "../assets/pair.webp";
// import headphone from "../assets/headphone.webp";
// import laptop from "../assets/laptop.webp";
// import cloth from "../assets/mClothe4.jpg";
// import phone from "../assets/phone.webp";
// import shoes from "../assets/shoes.jpg";

// function Banner() {
//   const [dotActive, setDotActive] = useState(0);
//   const settings = {
//     dots: true,
//     infinite: true,
//     autoplay: true,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: false,
//     beforeChange: (prev,next) =>{
//         setDotActive(next)
//     },
//     appendDots: (dots) => (
//       <div
//         style={{
//           position: "absolute",
//           top: "70%",
//           left: "45%",
//           transform: "translate(-50% -50%)",
//           width: "210px",
//         }}
//       >
//         <ul
//           style={{
//             width: "100%",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "space-between",
//           }}
//         >
          
//           {dots}
//         </ul>
//       </div>
//     ),
//     customPaging: (i) => (
//       <div
//         style={
//             i === dotActive 
             
//             ?{
           
//                 width:"30px",
//                 height:"30px",
//                 borderRadius:"50%",
//                 alignItems:"center",
//                 display:"flex",
//                 justifyContent:"center",
//                 color:"white",
//                 background:"#131921",
//                 padding:"8px 0",
//                 cursor:"pointer",
//                 border:"1px solid #f3a847"
            
      
//         }
//         :{
//             width:"30px",
//             height:"30px",
//             borderRadius:"50%",
//             alignItems:"center",
//             display:"flex",
//             justifyContent:"center",
//             color:"white",
//             background:"#131921",
//             padding:"8px 0",
//             cursor:"pointer",
//             border:"1px solid #f3a847"
//         }
//     }
//       >
//         {i + 1}
//       </div>
//     ),
//   };
//   return (
//     <div className="w-full">
//       <div className="w-full h-full relative">
//         <Slider {...settings}>
//           <div>
//             <img className="flex items-center justify-center mx-auto " src={laptop} alt="bags"></img>
//           </div>

//           <div>
//             <img className="flex items-center justify-center mx-auto " src={headphone} alt="bags"></img>
//           </div>

//           <div>
//             <img className="flex items-center justify-center mx-auto " src={pair} alt="bags"></img>
//           </div>

//           <div>
//             <img className="flex items-center justify-center mx-auto " src={cloth} alt="bags"></img>
//           </div>

//           <div>
//             <img className="flex items-center justify-center mx-auto " src={phone} alt="bags"></img>
//           </div>

//           <div>
//             <img className="flex items-center justify-center mx-auto " src={shoes} alt="bags"></img>
//           </div>
//         </Slider>
//       </div>
//     </div>
//   );
// }

// export default Banner;


import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import pair from "../assets/pair.webp";
 import headphone from "../assets/headphone.webp";
 import laptop from "../assets/laptop.webp";
 import cloth from "../assets/image2.jpg";
 import phone from "../assets/phone.webp";
 import shoes from "../assets/shoes.jpg";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>  <div className=' w-full h-96 flex items-center justify-center mx-auto'>
           <img className="w-full h-96" src={headphone} alt="bags"></img>
           </div> </SwiperSlide>
          
          
        <SwiperSlide> <div className=' flex items-center justify-center mx-auto'>
            <img className="w-full h-96 " src={pair} alt="bags"></img>
           </div></SwiperSlide>
        <SwiperSlide> <div className='w-full h-96 flex items-center justify-center mx-auto'>
           <img className="w-full h-96" src={phone} alt="bags"></img>
         </div></SwiperSlide>
         <SwiperSlide> <div className='w-full h-96 flex items-center justify-center mx-auto'>
            <img className="w-full h-96 " src={cloth} alt="bags"></img>
           </div></SwiperSlide>


           <SwiperSlide> <div className='w-full h-96 flex items-center justify-center mx-auto'>
            <img className="w-full h-96 " src={shoes} alt="bags"></img>
           </div></SwiperSlide>

           
      </Swiper>
      
    </>
  );
}
