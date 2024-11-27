// export const GET_CART_DATA = "GET_CART_DATA";
// export const INC_QTY = "INC_QTY";
// export const DEC_QTY = "DEC_QTY";
// export const REM_ONE = "REM_ONE";
// export const REM_ALL = "REM_ALL";
// export const ADD_TO_CART = "ADD_TO_CART";

// export const getCartData = (cartData) => {
//   const payload = JSON.parse(localStorage.getItem(cartData));
//   return {
//     type: GET_CART_DATA,
//     payload,
//   };
// };

// export const IncQty = (payload) => {
//   return {
//     type: INC_QTY,
//     payload,
//   };
// };

// export const DecQty = (payload) => {
//   return {
//     type: DEC_QTY,
//     payload,
//   };
// };

// export const RemoveOne = (payload) => {
//   return {
//     type: REM_ONE,
//     payload,
//   };
// };

// export const RemoveAll = (payload) => {
//   return {
//     type: REM_ALL,
//     payload,
//   };
// };

// export const addToCart =(payload)=>{
//   return {
//     type: ADD_TO_CART,
//     payload,
//   };
// }
// export const GET_CART_DATA = "GET_CART_DATA";
// export const INC_QTY = "INC_QTY";
// export const DEC_QTY = "DEC_QTY";
// export const REM_ONE = "REM_ONE";
// export const REM_ALL = "REM_ALL";
// export const ADD_TO_CART = "ADD_TO_CART";

// export const getCartData = () => {
//   // Retrieve cart data from local storage and parse it
//   const cartData = JSON.parse(localStorage.getItem("cartData")) || [];
//   return {
//     type: GET_CART_DATA,
//     payload: cartData,
//   };
// };

// export const IncQty = (itemId) => {
//   return {
//     type: INC_QTY,
//     payload: itemId, // Expecting MongoDB _id here
//   };
// };

// export const DecQty = (itemId) => {
//   return {
//     type: DEC_QTY,
//     payload: itemId, // Use _id from MongoDB
//   };
// };

// export const RemoveOne = (itemId) => {
//   return {
//     type: REM_ONE,
//     payload: itemId,
//   };
// };

// export const RemoveAll = () => {
//   return {
//     type: REM_ALL
//   };
// };

// export const addToCart = (item) => {
//   const { name, price, _id } = item; // Updated property names as needed

//   // Save the updated cart data to local storage
//   let cartData = JSON.parse(localStorage.getItem("cartData")) || [];
//   cartData.push({ _id, name, price, qty: 1 });
//   localStorage.setItem("cartData", JSON.stringify(cartData));

//   return {
//     type: ADD_TO_CART,
//     payload: { _id, name, price, qty: 1 },
//   };
// };
export const GET_CART_DATA = "GET_CART_DATA";
export const INC_QTY = "INC_QTY";
export const DEC_QTY = "DEC_QTY";
export const REM_ONE = "REM_ONE";
export const REM_ALL = "REM_ALL";
export const ADD_TO_CART = "ADD_TO_CART";

export const getCartData = () => {
  // We will directly get the cart data from the Redux state now
  return {
    type: GET_CART_DATA
  };
};

export const IncQty = (itemId) => {
  return {
    type: INC_QTY,
    payload: itemId, // Expecting MongoDB _id here
  };
};

export const DecQty = (itemId) => {
  return {
    type: DEC_QTY,
    payload: itemId, // Use _id from MongoDB
  };
};

export const RemoveOne = (itemId) => {
  return {
    type: REM_ONE,
    payload: itemId,
  };
};

export const RemoveAll = () => {
  return {
    type: REM_ALL,
  };
};

export const addToCart = (item) => {
  const { name, price, _id } = item; // Updated property names as needed

  return {
    type: ADD_TO_CART,
    payload: { _id, name, price, qty: 1 },
  };
};
