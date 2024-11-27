// import React from "react";
// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import {
//   DecQty,
//   IncQty,
//   RemoveOne,
// } from "../../../redux/guddu/cartRedux/CartAction";
// import styles from "./cartcard.module.css";

// export const CartCard = (props) => {
//   const [qty, setqty] = useState(1);
//   const dispatch = useDispatch();

//   const qtyInc = () => {
//     setqty(qty + 1);
//     dispatch(IncQty(props._id));
//   };
//   const qtyDec = () => {
//     if (qty >= 1) {
//       setqty(qty - 1);
//       dispatch(DecQty(props._id));
//     }
//   };

//   const removeOne = () => {
//     dispatch(RemoveOne(props._id));
//   };
//   return (
//     <div id={styles.frame}>
//       <div>
//         <img src={props.imgURL} alt="product image" />
//       </div>
//       <div id={styles.centerDiv}>
//         <p>{props.name}</p>
//         <button onClick={removeOne}>Remove</button>
//       </div>
//       <div id={styles.priceandqty}>
//         <button className={styles.btn} onClick={qtyDec}>
//           -
//         </button>
//         <p>{qty}</p>
//         <button className={styles.btn} onClick={qtyInc}>
//           +
//         </button>
//         <p>{`₹${props.price * qty}`}</p>
//       </div>
//     </div>
//   );
// };


// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   DEC_QTY,
//   INC_QTY,
//   REM_ONE,
// } from "../../../redux/guddu/cartRedux/CartAction";
// import styles from "./cartcard.module.css";

// export const CartCard = (props) => {
//   const dispatch = useDispatch();

//   // Access the cart data from the Redux store
//   // const cartData = useSelector((state) => state.cart.cartdata);
//   const cartData = JSON.parse(localStorage.getItem("cartData")) || [];
//   // Find the cart item based on the id passed in as props
//   const cartItem = cartData.find((item) => item._id === props._id);

//   // Get the quantity of the item, default to 0 if the item is not found
//   const qty = cartItem ? cartItem.qty : 0;

//   // Increment and Decrement quantity
//   const qtyInc = () => {
//     dispatch(INC_QTY(props._id)); // Increment quantity in Redux
//   };

//   const qtyDec = () => {
//     if (qty > 1) {
//       dispatch(DEC_QTY(props._id)); // Decrement quantity in Redux
//     }
//   };

//   // Remove one item from the cart
//   const removeOne = () => {
//     dispatch(REM_ONE(props._id)); // Remove one item from the cart
//   };

//   return (
//     <div id={styles.frame}>
//       <div>
//         <img src={props.imgURL} alt="product image" />
//       </div>
//       <div id={styles.centerDiv}>
//         <p>{props.name}</p>
//         <button onClick={removeOne}>Remove</button>
//       </div>
//       <div id={styles.priceandqty}>
//         <button className={styles.btn} onClick={qtyDec}>
//           -
//         </button>
//         <p>{qty}</p>
//         <button className={styles.btn} onClick={qtyInc}>
//           +
//         </button>
//         <p>{`₹${props.price * qty}`}</p>
//       </div>
//     </div>
//   );
// };

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  INC_QTY,
  DEC_QTY,
  REM_ONE,
} from "../../../redux/guddu/cartRedux/CartAction";
import styles from "./cartcard.module.css";

export const CartCard = (props) => {
  const dispatch = useDispatch();

  // Access the cart data from the Redux store
  const cartData = useSelector((state) => state.cartdata.cartdata); // Get cart data from Redux

  // Find the cart item based on the id passed in as props
  const cartItem = cartData.find((item) => item._id === props._id);

  // Get the quantity of the item, default to 0 if the item is not found
  const qty = cartItem ? cartItem.qty : 0;

  // Increment and Decrement quantity
  const qtyInc = () => {
    dispatch(INC_QTY(props._id)); // Increment quantity in Redux
  };

  const qtyDec = () => {
    if (qty > 1) {
      dispatch(DEC_QTY(props._id)); // Decrement quantity in Redux
    }
  };

  // Remove one item from the cart
  const removeOne = () => {
    dispatch(REM_ONE(props._id)); // Remove one item from the cart
  };

  return (
    <div id={styles.frame}>
      <div>
        <img src={props.imgURL} alt="product image" />
      </div>
      <div id={styles.centerDiv}>
        <p>{props.name}</p>
        <button onClick={removeOne}>Remove</button>
      </div>
      <div id={styles.priceandqty}>
        <button className={styles.btn} onClick={qtyDec}>
          -
        </button>
        <p>{qty}</p>
        <button className={styles.btn} onClick={qtyInc}>
          +
        </button>
        <p>{`₹${props.price * qty}`}</p>
      </div>
    </div>
  );
};
