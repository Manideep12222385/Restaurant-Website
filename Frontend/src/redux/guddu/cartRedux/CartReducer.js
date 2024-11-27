// import { localdata,savedata } from "../../../utils/localStorage";
// import {
//   ADD_TO_CART,
//   DEC_QTY,
//   GET_CART_DATA,
//   INC_QTY,
//   REM_ALL,
//   REM_ONE,
// } from "./CartAction";

// export const initstate = {
//   cartdata: [],  // Initialize as an empty array
// };

//   export const cartReducer = (state = initstate, { type, payload }) => {
//     switch (type) {
//       case GET_CART_DATA: {
//               return state;
//       }

//       case INC_QTY: {
//         const updatedCart = state.cartdata.map((elem) =>
//           elem._id === payload ? { ...elem, qty: elem.qty + 1 } : elem
//         );
//         return {
//           ...state,
//           cartdata: updatedCart,
//         };
//       }
//       case DEC_QTY: {
//         const updatedCart = state.cartdata
//           .map((elem) =>
//             elem._id === payload ? { ...elem, qty: elem.qty - 1 } : elem
//           )
//           .filter((elem) => elem.qty > 0);
//         return {
//           ...state,
//           cartdata: updatedCart,
//         };
//       }
//       case REM_ONE: {
//         const updatedCart = state.cartdata.filter((elem) => elem._id !== payload);
//         return {
//           ...state,
//           cartdata: updatedCart,
//         };
//       }
//       case REM_ALL: {
//         savedata("cart", []);
//         return {
//           ...state,
//           cartdata: [],
//         };
//       }
//       case ADD_TO_CART: {
//         const itemExists = state.cartdata.find((elem) => elem._id === payload._id);
//         const updatedCart = itemExists
//           ? state.cartdata.map((elem) =>
//               elem._id === payload._id ? { ...elem, qty: elem.qty + 1 } : elem
//             )
//           : [...state.cartdata, { ...payload, qty: 1 }];
//         return {
//           ...state,
//           cartdata: updatedCart,
//         };
//       }
      
//       default:
//         return state;
//     }
//   };
import {
  ADD_TO_CART,
  DEC_QTY,
  GET_CART_DATA,
  INC_QTY,
  REM_ALL,
  REM_ONE,
} from "./CartAction";

export const initstate = {
  cartdata: [],  // Initialize as an empty array
};

export const cartReducer = (state = initstate, { type, payload }) => {
  switch (type) {
    case GET_CART_DATA:
      return state; // Just return the current state

    case INC_QTY: {
      const updatedCart = state.cartdata.map((elem) =>
        elem._id === payload ? { ...elem, qty: elem.qty + 1 } : elem
      );
      return {
        ...state,
        cartdata: updatedCart,
      };
    }
    case DEC_QTY: {
      const updatedCart = state.cartdata
        .map((elem) =>
          elem._id === payload ? { ...elem, qty: elem.qty - 1 } : elem
        )
        .filter((elem) => elem.qty > 0); // Filter out items with qty 0
      return {
        ...state,
        cartdata: updatedCart,
      };
    }
    case REM_ONE: {
      const updatedCart = state.cartdata.filter((elem) => elem._id !== payload);
      return {
        ...state,
        cartdata: updatedCart,
      };
    }
    case REM_ALL: {
      return {
        ...state,
        cartdata: [],
      };
    }
    case ADD_TO_CART: {
      const itemExists = state.cartdata.find((elem) => elem._id === payload._id);
      const updatedCart = itemExists
        ? state.cartdata.map((elem) =>
            elem._id === payload._id ? { ...elem, qty: elem.qty + 1 } : elem
          )
        : [...state.cartdata, { ...payload, qty: 1 }];
      return {
        ...state,
        cartdata: updatedCart,
      };
    }

    default:
      return state;
  }
};
