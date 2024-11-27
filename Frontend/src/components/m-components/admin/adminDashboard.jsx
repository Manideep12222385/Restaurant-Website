import React, { useEffect, useState } from 'react';
import axios from 'axios';
import  "./adminDashboard.css"
import CardSkeleton from '../../surya_ components/skeletonLoading/cardSkeleton';

const AdminDashboard = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    // Fetch cart data from the backend
    const fetchCartItems = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/cart/getAll'); // Adjust the endpoint URL if needed
        setCartItems(response.data);
      } catch (err) {
        setError("Failed to fetch cart items. Please try again later.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCartItems();
  }, []);

  if (loading) return <p><CardSkeleton cards={5}/></p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      <table className="cart-table">
        <thead>
          <tr>
            <th>User ID</th>
            <th>Product ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <tr key={item._id}>
                <td>{item.userId}</td>
                <td>{item.productId}</td>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>{item.price}</td>
                <td>{item.quantity}</td>
                <td>{item.category}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" style={{ textAlign: 'center' }}>
                No items found in the cart.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;
