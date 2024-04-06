import React, { createContext, useEffect, useState } from "react";
export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [itemAmount, setItemAmount] = useState(0);
  const [total, setTotal] = useState(0);
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");

  const searchProduct = (product) => {
    const filteredProducts = product.filter((row) => {
      if (search === "") {
        return row;
      } else if (row.title.toLowerCase().includes(search.toLowerCase())) {
        return row;
      }
    });
    console.log(filteredProducts);
  };

  // useEffect(() => {
  //     const findProduct = cart.filter((product) => product.title === search);
  //   setSearch(findProduct)
  // }, [ search]);

  const addToCart = (product, id) => {
    const newItem = { ...product, quantity: 1 };
    const exist = cart.find((x) => x.id === id);
    const newCart = [...cart].map((item) =>
      item.id === id ? { ...exist, quantity: exist.quantity + 1 } : item
    );
    exist ? setCart(newCart) : setCart([...cart, newItem]);
  };

  const removeItem = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };

  useEffect(() => {
    const total = cart.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setTotal(total);
  }, [cart]);

  const increaseItem = (id) => {
    const item = cart.find((item) => item.id === id);

    addToCart(item, id);
    console.log(item);
  };

  const removeAll = () => {
    setCart([]);
  };

  const decreaseItem = (id) => {
    const cartExist = cart.find((item) => item.id === id);
    if (cartExist) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: cartExist.quantity - 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    }
    if (cartExist.quantity < 2) {
      removeItem(id);
    }
  };

  useEffect(() => {
    if (cart) {
      const amount = cart.reduce((acc, curr) => {
        return acc + curr.quantity;
      }, 0);
      setItemAmount(amount);
    }
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        removeAll,
        addToCart,
        removeItem,
        increaseItem,
        decreaseItem,
        itemAmount,
        total,
        search,
        setSearch,
        searchProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
