import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { SidebarContext } from "../../contexts/SidebarContext";
import { CartContext } from "../../contexts/CartProvider";
import { TiArrowRight } from "react-icons/ti";
import Button from "../elements/Button";
import CartLayout from "../templates/CartLayout";

const Sidebar = () => {
  
  const { open, handleClose } = useContext(SidebarContext);
  return (
    <>
      <aside className="">
        <main
          className={`${
            open ? "right-0" : "-right-full"
          } w-full  bg-gray-200 fixed top-0 z-20  shadow-xl md:w-[35vw] xl:max-w-[30vw] transition-all h-screen duration-300 px-4 lg:px-[35px]`}
        >
          <div className="my-2">
            <ul className="flex w-full justify-between items-center">
              <li className="text-xl font-semibold font-poppins">Shopify</li>
              <li>
                <Button onClick={handleClose}>
                  <TiArrowRight />
                </Button>
              </li>
            </ul>
          </div>
         <CartLayout/>
        </main>
      </aside>
    </>
  );
};

export default Sidebar;
