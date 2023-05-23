import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [newItemName, setNewItemName] = useState('');
  const [removeItemName, setRemoveItemName] = useState('');

  useEffect(() => {
    fetchMenuItems();
  }, []);

  const fetchMenuItems = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:5000/menu');
      const data = response.data;
      setMenuItems(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (event) => {
    setNewItemName(event.target.value);
  };

  const handleRemoveInputChange = (event) => {
    setRemoveItemName(event.target.value);
  };

  const handleAddItem = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:5000/menu/add', {
        title: newItemName,
      });
      const newItem = response.data;
      setMenuItems([...menuItems, newItem]);
      setNewItemName('');
    } catch (error) {
      console.error(error);
    }
  };

  const handleRemoveItem = async () => {
    try {
      const itemToRemove = menuItems.find((item) => item.title === removeItemName);
      if (!itemToRemove) {
        console.error('Item not found');
        return;
      }
  
      await axios.delete(`http://127.0.0.1:5000/menu/remove/${itemToRemove._id}`);
      const updatedItems = menuItems.filter((item) => item.title !== removeItemName);
      setMenuItems(updatedItems);
      setRemoveItemName('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Menu</h1>
      <div>
        <h2>Add Item</h2>
        <input type="text" value={newItemName} onChange={handleInputChange} />
        <button onClick={handleAddItem}>Add</button>
      </div>
      <div>
        <h2>Remove Item</h2>
        <input type="text" value={removeItemName} onChange={handleRemoveInputChange} />
        <button onClick={handleRemoveItem}>Remove</button>
      </div>
      <div>
        <h2>Menu Items</h2>
        <ul>
          {menuItems.map((item) => (
            <li key={item._id}>{item.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
