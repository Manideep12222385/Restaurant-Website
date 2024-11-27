
import React from "react";
import { useDispatch } from "react-redux";
import { addToCart, DecQty, IncQty } from "../redux/guddu/cartRedux/CartAction";
import { getAuth } from "firebase/auth"; // Firebase auth import
import { useNavigate } from "react-router-dom"; // For navigation
import { toast } from "react-toastify"; // For notifications
import "react-toastify/dist/ReactToastify.css"; // Toastify styles
import axios from "axios"; // For making API requests

export const CartButton1 = ({ item }) => {
  const [count, setCount] = React.useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = getAuth();

  const handleInc = () => {
    setCount(count + 1); // Update local count
    dispatch(IncQty(item._id)); // Dispatch IncQty with item._id to update Redux store
  };

  const handleDec = () => {
    if (count > 1) {
      setCount(count - 1); // Update local count
      dispatch(DecQty(item._id)); // Dispatch DecQty with item._id to update Redux store
    } else if (count === 1) {
      setCount(0); // Reset count if it's 1
      dispatch({ type: "REM_ONE", payload: item._id }); // Remove item from Redux store
    }
  };

  const handleBtn = () => {
    const user = auth.currentUser; // Check if the user is logged in

    if (user) {
      // User is logged in
      setCount(1); // Start the count at 1 when adding to cart
      dispatch(addToCart(item)); // Dispatch addToCart with the full item object
    } else {
      // User is not logged in
      toast.warn("Please log in to add items to the cart!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });
      navigate("/login"); // Redirect to login route
    }
  };

  return (
    <div className="bt">
      {count === 0 ? (
        <button className="addcart" onClick={handleBtn}>
          Add to Cart
        </button>
      ) : (
        <div className="btn-div">
          <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
            <button
              className="btn"
              style={{
                padding: "10px",
                fontSize: "20px",
                width: "50px",
                height: "auto",
                borderRadius: "50%",
                border: "1px solid black",
              }}
              onClick={handleDec}
            >
              -
            </button>
            <p className="count-item">{count}</p>
            <button
              className="btn"
              style={{
                padding: "10px",
                fontSize: "20px",
                width: "50px",
                height: "auto",
                borderRadius: "50%",
                border: "1px solid black",
              }}
              onClick={handleInc}
            >
              +
            </button>
          </div>
        </div>
      )}
    </div>
  );
};





export const CartButton = ({ item }) => {
  const [count, setCount] = React.useState(0);
  const navigate = useNavigate();
  const auth = getAuth();

  // Handle adding an item to the cart
  const handleBtn = async () => {
    const user = auth.currentUser;

    if (user) {
      const { uid: userId } = user;
      const { _id: productId, name, description, price, image, category } = item;

      try {
        const response = await axios.post("http://localhost:5000/api/cart/add-to-cart", {
          name,
          description,
          price,
          image,
          category,
          productId,
          userId
        });

        if (response.status === 201 || response.status === 200) {
          setCount(1);
          toast.success("Item added to cart!", { autoClose: 3000 });
        }
      } catch (error) {
        console.error("Error adding item to cart:", error);
        toast.error("Failed to add item to cart. Try again!", { autoClose: 3000 });
      }
    } else {
      toast.warn("Please log in to add items to the cart!", { autoClose: 3000 });
      navigate("/login");
    }
  };

  // Handle incrementing item quantity
  const handleInc = async () => {
    
    const user = auth.currentUser;

    if (user) {
      try {
        const response = await axios.put(
          `http://localhost:5000/api/cart/update-quantity/${item._id}`,
          { action: "increment" }
        );

        if (response.status === 200) {
          setCount(count + 1);
          toast.success("Quantity updated!", { autoClose: 2000 });
        }
      } catch (error) {
        console.error("Error incrementing item quantity:", error);
        toast.error("Failed to update quantity. Try again!", { autoClose: 2000 });
      }
    }
  };

  // Handle decrementing item quantity
  const handleDec = async () => {
    const user = auth.currentUser;

    if (user) {
      try {
        if (count > 1) {
          const response = await axios.put(
            `http://localhost:5000/api/cart/update-quantity/${item._id}`,
            { action: "decrement" }
          );

          if (response.status === 200) {
            setCount(count - 1);
          }
        } else if (count === 1) {
          // Remove item if count is 1
          const response = await axios.delete(`http://localhost:5000/api/cart/${item._id}`);

          if (response.status === 200) {
            setCount(0);
          }
        }
      } catch (error) {
        console.error("Error decrementing item quantity:", error);
        toast.error("Failed to update quantity. Try again!", { autoClose: 2000 });
      }
    }
  };

  return (
    <div className="bt">
      {count === 0 ? (
        <button className="addcart" onClick={handleBtn}>
          Add to Cart
        </button>
      ) : (
        <div className="btn-div">
          <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
            <button
              className="btn"
              style={{
                padding: "10px",
                fontSize: "20px",
                width: "50px",
                height: "auto",
                borderRadius: "50%",
                border: "1px solid black",
              }}
              onClick={handleDec}
            >
              -
            </button>
            <p className="count-item">{count}</p>
            <button
              className="btn"
              style={{
                padding: "10px",
                fontSize: "20px",
                width: "50px",
                height: "auto",
                borderRadius: "50%",
                border: "1px solid black",
              }}
              onClick={handleInc}
            >
              +
            </button>
          </div>
        </div>
      )}
    </div>
  );
};





const CartButton2 = ({ item }) => {
  const [count, setCount] = React.useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = getAuth();

  const handleBtn = async () => {
    const user = auth.currentUser;

    if (user) {
      const { uid: userId } = user;
      const { _id: productId, name, description, price, image, category } = item;

      try {
        const response = await axios.post("http://localhost:5000/api/cart/add-to-cart", {
          name,
          description,
          price,
          image,
          category,
          productId,
          userId,
        });

        if (response.status === 201 || response.status === 200) {
          setCount(1);
          dispatch(addToCart(item)); // Dispatch Redux action
          toast.success("Item added to cart!", { autoClose: 3000 });
        }
      } catch (error) {
        console.error("Error adding item to cart:", error);
        toast.error("Failed to add item to cart. Try again!", { autoClose: 3000 });
      }
    } else {
      toast.warn("Please log in to add items to the cart!", { autoClose: 3000 });
      navigate("/login");
    }
  };

  const handleInc = async () => {
    const user = auth.currentUser;

    if (user) {
      try {
        const response = await axios.put(
          `http://localhost:5000/api/cart/update-quantity/${item._id}`,
          { action: "increment" }
        );

        if (response.status === 200) {
          setCount(count + 1);
          dispatch(IncQty(item._id)); // Dispatch Redux increment action
          toast.success("Quantity updated!", { autoClose: 2000 });
        }
      } catch (error) {
        console.error("Error incrementing item quantity:", error);
        toast.error("Failed to update quantity. Try again!", { autoClose: 2000 });
      }
    }
  };

  const handleDec = async () => {
    const user = auth.currentUser;

    if (user) {
      try {
        if (count > 1) {
          const response = await axios.put(
            `http://localhost:5000/api/cart/update-quantity/${item._id}`,
            { action: "decrement" }
          );

          if (response.status === 200) {
            setCount(count - 1);
            dispatch(DecQty(item._id)); // Dispatch Redux decrement action
          }
        } else if (count === 1) {
          const response = await axios.delete(`http://localhost:5000/api/cart/${item._id}`);

          if (response.status === 200) {
            setCount(0);
            dispatch({ type: "REM_ONE", payload: item._id }); // Dispatch remove action
          }
        }
      } catch (error) {
        console.error("Error decrementing item quantity:", error);
        toast.error("Failed to update quantity. Try again!", { autoClose: 2000 });
      }
    }
  };

  return (
    <div className="bt">
      {count === 0 ? (
        <button className="addcart" onClick={handleBtn}>
          Add to Cart
        </button>
      ) : (
        <div className="btn-div">
          <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
            <button
              className="btn"
              style={{
                padding: "10px",
                fontSize: "20px",
                width: "50px",
                height: "auto",
                borderRadius: "50%",
                border: "1px solid black",
              }}
              onClick={handleDec}
            >
              -
            </button>
            <p className="count-item">{count}</p>
            <button
              className="btn"
              style={{
                padding: "10px",
                fontSize: "20px",
                width: "50px",
                height: "auto",
                borderRadius: "50%",
                border: "1px solid black",
              }}
              onClick={handleInc}
            >
              +
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartButton2;
