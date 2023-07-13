import React from "react";
import Banner from "./../home/Banner";
import Product from "../home/Product";
import Header from "../component/Header";
import Footer from "../footer/Footer";

function Home() {
  return (
    <div>
      <Header />
      <Banner />

      <div className="w-full -mt-3 xl:-mt-36 py-10">
        <Product />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
