import React, { useContext, Suspense } from "react";
import { CartContext } from "../../contexts/CartProvider";
import SidebarProduct from "../UI/SidebarProduct";
import { FaTrash } from "react-icons/fa";
import Button from "../elements/Button";

const CartLayout = () => {
  const { cart, removeAll, total } = useContext(CartContext);
  const id = cart.map((product) => product.id)
  return (
    <>
      <div className="flex flex-col items-end space-y-2 ">
        {cart.length > 0 ? (
          <Suspense key={id} fallback={<div className="text-4xl font-bold">Loading...</div>}>
            <div className="h-[400px] gapy-5 lg:h-[650px] overflow-y-auto overflow-x-hidden">
              <SidebarProduct key={id}/>
            </div>
          </Suspense>
        ) : (
          <h1 className="text-3xl text-center font-open-sans text-secondary font-semibold opacity-60 grid place-items-center h-screen">
            No Cart Added
          </h1>
        )}
        <div>
          <h1>Total: ${parseFloat(total).toFixed(3)}</h1>
        </div>
      <Button onClick={() => removeAll(id)} className={"bg-red-500 hover:bg-red-800 gap-2 flex items-center"}>
        Delete <FaTrash/>
      </Button>
      </div>
    </>
  );
};

export default CartLayout;
