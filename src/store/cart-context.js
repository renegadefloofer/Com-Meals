import React from "react";

const CartContext = React.createContext({
  //initializing data for auto-completion
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default CartContext;
