import './Searchbar.css'
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Product.css'


const Product = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Fetch data from the API
    fetch('http://localhost:5000/api/FoodItems')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error(error));
  }, []);

  const handleSearch = () => {
    // Filter products based on the search query
    let filteredProducts = products;

    if (searchQuery) {
      filteredProducts = products.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter further based on the selected product
    if (selectedProduct) {
      filteredProducts = filteredProducts.filter(
        item => item.product === selectedProduct
      );
    }

    return filteredProducts;
  };

  const renderProducts = () => {
    const filteredProducts = handleSearch();

    if (filteredProducts.length === 0) {
      return <p>No products found.</p>;
    }

    return filteredProducts.map(item => (
      <div className="container" style={{ display: "flex", flexWrap: "wrap", margin: "20px -10px" }}>
        <div className="mx-2" style={{ display: "inline-block", margin: "10px" }}>
          <div key={item._id} className="menu-item card my- py-4" style={{ width: "18rem" }}>
            <div className="menu-item-image" >
              <img src={item.img} className="card-img-top" alt={item.title} height="250px" />
            </div>
            <div className="menu-item-details card-body text-center">
              <h3 className="menu-item-title card-title">{item.title}</h3>
              <p className="menu-item-price card-text lead fw-bold">${item.price}</p>
              <NavLink to={`/products/${item._id}`} className="btn btn-outline-dark">Buy Now</NavLink>
            </div>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="container">
      <h1 className="display-6 fw-bolder text-center">Menu</h1>
      <div className="buttons d-flex justify-content-center mb-5 pb-5">
        <button className='btn btn-outline-dark me-2' onClick={() => setSelectedProduct('')}>ALL</button>
        <button className='btn btn-outline-dark me-2' onClick={() => setSelectedProduct('Pizza')}>PIZZA</button>
        <button className='btn btn-outline-dark me-2' onClick={() => setSelectedProduct('Juice')}>JUICE</button>
        <button className='btn btn-outline-dark me-2' onClick={() => setSelectedProduct('Meal')}>MEALS</button>
        <button className='btn btn-outline-dark me-2' onClick={() => setSelectedProduct('Dessert')}>DESSERT</button>
        <button className='btn btn-outline-dark me-2' onClick={() => setSelectedProduct('Extra')}>EXTRAS</button>
      </div>
      <div className="search-bar mb-4">
        <input
          type="text"
          placeholder="Search by title"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />
        <button className="btn btn-outline-dark" onClick={handleSearch}>
          Search
        </button>
      </div>
      <div className="menu-items-grid">{renderProducts()}</div>
    </div>
  );
};

export default Product;

