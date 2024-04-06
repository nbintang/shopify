import React, { useContext } from "react";
import { CartContext } from "../contexts/CartProvider";
import { ProductContext } from "../contexts/ProductContext";
import { useParams } from "react-router-dom";
import CardProduct from "../components/UI/CardProducts";

const ProductPages = () => {
  const { addToCart } = useContext(CartContext);
  const { products } = useContext(ProductContext);
  const { id } = useParams();

  const product = products.find((item) => item.id === parseInt(id));

  if (!product) {
    return (
      <div className="text-primary font-bold text-xl grid place-items-center h-screen">
        Loading...
      </div>
    );
  }

  const { title, description, price, category, image, rating } = product;
  return (
    <>
      <div className="w-full h-screen flex justify-center min-w-0 ">
        <div className="flex justify-center items-center flex-wrap">
          <div className=" flex justify-center w-full md:w-96">
            <img src={image} alt={title} className="w-[200px] md:w-[300px]" />
          </div>
          <div className="max-w-3xl px-4 flex flex-col items-start gap-y-4">
            <div>
              <h1 className="font-extrabold text-3xl md:text-4xl font-poppins flex items-start">
                {title}{" "}
                <span className="text-lg ml-2 font-open-sans">
                  {" "}
                  ({rating.count})
                </span>
              </h1>
              <p className="font-open-sans text-lg md:text-xl">{description}</p>
            </div>
            <div className="space-y-1">
              <p className="font-lora text-4xl font-semibold">
                {price.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </p>
              <p className="font-bold text-2xl">
                {category.slice(0, 1).toUpperCase() + category.slice(1)}
              </p>
              <p className="text-3xl font-lora">{rating.rate + "/" + 5}</p>
            </div>
          <CardProduct.Button onClick={() => addToCart(product, product.id)}>
            Add to Cart
          </CardProduct.Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPages;
