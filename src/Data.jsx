import React, { Fragment, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Product = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct] = useState('');

  useEffect(() => {
    // Fetch data from the API
    fetch('localhost:5000/api/FoodItems')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error(error));
  }, []);

  const filteredProducts = selectedProduct
    ? products.filter(item => item.product === selectedProduct)
    : products;

  const Loading = () => {
    return (
      <Fragment>
    
      </Fragment>
    );
  };

  return (
    <div>
      <div className="container py-5">
        <div className="row">
          <div className="col-12 text-center">
            <h1 className="display-6 fw-bolder text-center">Product</h1>
            <hr />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-around">
          {products.length === 0 ? (
            <Loading />
          ) : (
            filteredProducts.map(item => (
              <div className="mx-2" style={{ display: 'inline-block', margin: '10px' }}>
                <div className="card my- py-4" key={item.id} style={{ width: '18rem' }}>
                  <img src={item.img} className="card-img-top" alt={item.title} height="250px" />
                  <div className="card-body text-center">
                    <h5 className="card-title">{item.title}...</h5>
                    <p className="card-text lead fw-bold">${item.price}</p>
                    <NavLink to={`/products/${item.id}`} className="btn btn-outline-dark">
                      Buy Now
                    </NavLink>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
