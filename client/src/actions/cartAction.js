export const addtocart = (pizza, quantity, varient) => (dispatch, getState) => {
  var cartItem = {
    name: pizza.name,
    _id: pizza._id,
    image: pizza.image,
    varient: varient,
    quantity: Number(quantity),
    prices: pizza.prices,
    price: pizza.prices[0][varient] * quantity,
  };

  if (pizza.quantity > 10) {
    alert("you cannot add more than 10");
  } else {
    if (cartItem.quantity < 0) {
      dispatch({ type: "DELETE_FROM_CART", payload: pizza });
    } else {
      const cartItems = getState().cartReducer.cartItems;
      dispatch({ type: "ADD_TO_CART", payload: cartItem });
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
  }
};

export const deleteFromCart = (pizza) => (dispatch, getState) => {
  const cartItems = getState().cartReducer.cartItems;
  dispatch({ type: "DELETE_FROM_CART", payload: pizza });
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};
