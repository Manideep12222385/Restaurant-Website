// Sidebar.js
import React, { useState } from 'react';
import { motion, spring } from "framer-motion";
function Sidebar({ onCategorySelect }) {
  const [selectedCategory, setSelectedCategory] = useState(null);
  
  const cat_items={
    hidden: { opacity: 0, x: -150 },
    visible: { opacity: 1, x: 0 },
  }

  const categories = {
    Soups: ['Tomato Soup', 'Mushroom Soup', 'Chicken Soup'],
    Starters: ['Spring Rolls', 'Chicken Wings', 'Garlic Bread'],
    Chinese: ['Fried Rice', 'Noodles', 'Sweet and Sour Chicken'],
    'Sea Food': ['Grilled Salmon', 'Shrimp Cocktail', 'Lobster'],
    Tandoori: ['Paneer Tikka', 'Chicken Tandoori', 'Tandoori Roti'],
    Curries: ['Butter Chicken', 'Paneer Butter Masala', 'Dal Makhani'],
    'Main Courses': ['Biryani', 'Fried Rice', 'Naan'],
    Desserts: ['Ice Cream', 'Gulab Jamun', 'Brownie'],
    Beverages: ['Soft Drink', 'Coffee', 'Tea'],
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    onCategorySelect(category); // Pass selected category to parent
  };

  return (
    <motion.div
          initial="hidden"  // Initial animation state
          animate="visible" // Animation state after component mounts
          transition={{ staggerChildren: 0.5, duration: 0.6 ,type:spring,delay:0.6}} // Delays between items and duration of animation
        >
    <div className="sidebar" style={sidebarStyles}>
      <img
        style={{ height: '30px', width: '50px', marginBottom: '-20px' }}
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAAeCAYAAAB5c901AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABNSURBVHgB7c9BDQAgAMPAgQ4c4F8KDvABFuBHSe+9LGmZ6SsXWkY52b3yW/M5A+kMpDOQzkA6A+kMpDOQzkA6A+kMpDOQzkA6A+kMpNu9MQhKmC+cDgAAAABJRU5ErkJggg=="
        alt="TripleRedLine"
      />
      <h5 style={{ marginTop: '10px', fontSize:'36px'}}>MENU</h5>
      {Object.keys(categories).map((category) => (
        <motion.p
          key={category}
          onClick={() => handleCategoryClick(category)}
          variants={cat_items}
          transition={{ duration: 0.4, ease: "easeInOut", type: spring }}
          style={{
            cursor: 'pointer',
            height:'60px',
            fontWeight: selectedCategory === category ? 'bold' : 'normal',
          }}
        >
          {category}
        </motion.p>
      ))}
    </div>
    </motion.div>
  );
}

const sidebarStyles = {
  display: 'flex',
  flexDirection: 'column',
  justifycontent:'flex-start',
  width: '300px',
  textAlign: 'center',
  position: 'absolute',
  height: '125vh',
  backgroundColor: '#d7d7d7',
  boxShadow: '2px 0 5px rgba(0,0,0,0.1)',
  zIndex:0
};

export default Sidebar;
