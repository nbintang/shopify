import React, { useContext, Suspense } from "react";
import { CartContext } from "../../contexts/CartProvider";
import CardProduct from "../UI/CardProducts";
import { ProductContext } from "../../contexts/ProductContext";
// import SearchProduct from "./SearchProduct";

const ProductLayout = () => {
  const { products } = useContext(ProductContext);
  const { addToCart, search } = useContext(CartContext);
  const filterProducts = products.filter(
    (product) =>
      product.category === "men's clothing" ||
      product.category === "women's clothing"
  );

  return (
    <>
      <main className="pt-2 bg-fourth max-w-4xl min-w-0">
        <section className="flex flex-wrap w-full justify-center items-center">
          {filterProducts.map((product) => {
            const { id, title, image, description, price, rating, category } =
              product;
            return (
              // <SearchProduct search={search}  >
              <Suspense
                fallback={<div className="text-4xl font-bold">Loading...</div>}
                key={id}
              >
                <div className="" key={id}>
                  <CardProduct
                    id={id}
                    title={title.substring(0, 11)}
                    image={image}
                    description={description.substring(0, 50) + "..."}
                    rating={rating.rate + "/" + 5}
                    category={
                      category.toUpperCase().slice(0, 1) + category.slice(1)
                    }
                    price={price.toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })}
                    className={"max-w-44 sm:max-w-60"}
                  >
                    <CardProduct.Button
                      className={`w-full`}
                      onClick={() => addToCart(product, id)}
                    >
                      Add To Cart
                    </CardProduct.Button>
                  </CardProduct>
                </div>
              </Suspense>
              // </SearchProduct>
            );
          })}
        </section>
      </main>
    </>
  );
};

export default ProductLayout;
