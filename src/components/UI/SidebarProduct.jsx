import React, { useContext } from "react";
import Button from "../elements/Button";
import { CartContext } from "../../contexts/CartProvider";
import { SidebarContext } from "../../contexts/SidebarContext";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const SidebarProduct = () => {
  const {handleClose} = useContext(SidebarContext)
  const { cart, removeItem, increaseItem, decreaseItem } = useContext(CartContext);
  return cart.map(({ id, title, price, image, category, rating, quantity }) => {
    return (
      <>
        <div
          className="flex bg-secondary   w-full items-center relative shadow"
          key={id}
        >
          
          <div className="w-1/2 flex   flex-col items-center">
            <Link to={`/product/${id}`}>
            <img
              src={image}
              alt={title}
              className="w-32 transition duration-100 hover:scale-95  h-32 t object-cover mix-blend-multiply"
              onClick={() => handleClose()}
            />
            </Link>
          </div>
          <div className="w-full flex flex-col">
            <h1 className="xl:text-sm md:text-[10px] font-bold text-fourth  w-full font-poppins ">{title}</h1>

            
            <div className="flex mt-2 flex-row-reverse items-center flex-wrap-reverse justify-between ">
              <div className=" mr-3 text-fourth text-sm">Total: ${parseFloat(price*quantity).toFixed(2)}</div>

              <div className="flex items-center justify-between">
                <Button className="flex items-center h-7" onClick={() => decreaseItem(id)}>-</Button>
                <div className="px-2 bg-fourth" >{quantity}</div>
                <Button className="flex items-center h-7" onClick={() => increaseItem(id)}>+</Button>
              </div>
          
           

            </div>
          </div>
          <div className="absolute -top-0  right-0">
              <Button className="text-[8px] "
               onClick={() => removeItem(id)}>
                <FaTimes />
              </Button>
            </div>
        </div>
      </>
    );
  });
};

export default SidebarProduct;
