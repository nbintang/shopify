import React, { useContext, useEffect, useState } from "react";
import SearchBar from "../elements/SearchBar";
import Button from "../elements/Button";
import { SidebarContext } from "../../contexts/SidebarContext";
import { CartContext } from "../../contexts/CartProvider";
import { Link } from "react-router-dom";
import { TiArrowSortedDown } from "react-icons/ti";
import { MdShoppingCart } from "react-icons/md";
import { ProductContext } from "../../contexts/ProductContext";

export default function Navbar() {
  const { open, setOpen } = useContext(SidebarContext);
  const { 
    itemAmount,
    search,
    setSearch,
    searchProduct
   } = useContext(CartContext);
  const { products } = useContext(ProductContext);

  return (
    <header className="w-full py-3 bg-primary">
      <nav className="flex m-3 justify-center">
        <div className="flex flex-wrap w-full justify-around">
          <h1 className="text-xl md:text-4xl flex flex-wrap font-bold font-poppins">
            <Link to={"/"}>
              <p>
                <span className="text-tertiary">Shop</span>
                <span className="text-fourth">ify</span>
              </p>
            </Link>
          </h1>
          <div className="flex justify-between">
            <div className="flex">
              <div>
                
              </div>
              <SearchBar 
                className={"w-full max-w-lg "}
                placeholder={"Search"}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDownCapture={()=> searchProduct(products)}
                value={search}
              />
              {}
              {/* <div className="flex justify-between flex-row-reverse mt-1">
                <ul className="text-sm flex w-full  font-open-sans gap-x-5 ml-2  text-fourth opacity-45 hover:[&>*]:underline">
                  <li>
                    <a href="">new bags</a>
                  </li>
                  <li>
                    <a href="">men clothings</a>
                  </li>
                  <li>
                    <a href="">iphone</a>
                  </li>
                  <li>
                    <a href="">laptop</a>
                  </li>
                  <li>
                    <a href="">jewels</a>
                  </li>
                </ul>

                <Link
                  to={"/"}
                  className="mr-3 font-open-sans min-w-0 flex text-fourth opacity-45 hover:opacity-100"
                >
                  <p>Category </p>
                  <TiArrowSortedDown className="text-2xl" />
                </Link>
              </div> */}
            </div>
          </div>
          <Button onClick={() => setOpen(!open)} className={"relative"}>
            <MdShoppingCart className="sm:text-3xl text-xl text-fourth  hover:text-tertiary" />

            <p className="text-xs text-fourth absolute top-0 right-0">
              {itemAmount}
            </p>
          </Button>
          {/* <div className=" flex justify-between w-1/2">
            <div className="mt-2">
            </div>
            <div>
              <Button
                className={`bg-gray-100 hidden sm:inline border font-lora transition duration-100 border-secondary hover:bg-primary hover:text-fourth text-tertiary  sm:w-24 `}
              >
                Login
              </Button>
            </div>

            <div>
              <Button
                className={`border sm:w-24 transition duration-100 hidden font-lora sm:inline`}
              >
                Register
              </Button>
            </div>
          </div> */}
        </div>
      </nav>
    </header>
  );
}
