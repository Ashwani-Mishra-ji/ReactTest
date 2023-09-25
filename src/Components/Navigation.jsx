import React from "react";
import { Link } from "react-router-dom";
import './Navigation.css'
import Home from "./Home";
import About from "./About";
import Product from "./Product";

const Navigation = () => {
  return (
    <>
      <div className=" h-10 prenav"><span className="text-gray-600 ml-10"><img src="src/assets/Layer 156.png " className="inline" alt="" /> Free Delivery | Return Policy</span>  <span className=" text-white">login</span></div>
      <div className="min-h-screen nav">
        <div className="container mx-auto flex justify-between items-center ">
          <div className="text-white text-xl font-bold ml-10">
            <a href="/" className="shop"> ShopKart</a>
          </div>
          <div className="space-x-4 mx-64 text-white">
            <a href="home">Wishlist</a>
            <a href="bag">Bag</a>
          </div>
        </div>
        <div className="container ml-10 flex justify-between items-center">
          <img
            className=""
            src="src/assets/bottom-line.png"
            alt="bottom-line"
          />
        </div>
        <div className="flex mainNavbarContainer">
          <ul className="flex space-x-40 ">
            <li>
              <Link to="/" className="text-white ">
                HOME
              </Link>
            </li>
            <li>
              <Link to="/about"  className="text-white">
                ABOUT
              </Link>
            </li>
            <li>
              <Link to="/Product">
              <select className="bg-black text-white" name="product" id="">
                <option value="product">OUR PRODUCT</option>
                <option value="product">PRODUCT1</option>
                <option value="product">PRODUCT1</option>
                <option value="product">PRODUCT1</option>
              </select>
              </Link>
            </li>
            <li>
              <Link to="/contactus" className="text-white">
                CONTACT US
              </Link>
            </li>
          </ul>
        </div>
         <div className="absolute  bottom-0 right-0 h-66 w-75  ">       
           <img src="/src/assets/man-image.png " className="" alt="" /> 
          </div>
        <div className="absolute  bottom-0 right-0 h-66 w-75  ">
        <img src="src/assets/Orange-Shade.png" className="orangeimg" alt="" />

        </div> 
       
        <div className="relative  h-80 w-68">
          <div className="absolute inset-y-0 left-0 w-46 mt-60 ml-40 ">
            <img src="/src/assets/fresh.png"  alt="fresh" />

          </div>
        </div>
        <br />
        <div className=" img2022 mt-10">
          <img src="/src/assets/2022.png" alt="2022" />
        </div>
        <div className="lookimg mb-4">
          <img src="/src/assets/look.png" alt="2022" />
        </div>
        <img src="src/assets/bottom-line.png" alt="" />
        <button type="submit" id='submit' className="mx-5 w-22 h-9 mr-1  border border-white hover:border-gray-700 focus:outline-none text-white">see more↗️ </button>



        </div>

     
    </>
  );
};

export default Navigation;

