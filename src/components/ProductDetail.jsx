// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { addItem, delItem } from '../redux/actions/index';

// const ProductDetail = () => {
//   const [product, setProduct] = useState(null);
//   const [cartBtn, setCartBtn] = useState('Add to Cart');
//   const { id } = useParams();

//   // We need to store useDispatch in a variable
//   const dispatch = useDispatch();

//   useEffect(() => {
//     // Fetch the product details from your API using the 'id'
//     // Replace `apiEndpoint` with your actual API endpoint
//     fetch(`http://16.16.115.134:5000/api/FoodItems/${id}`)
//       .then((response) => response.json())
//       .then((data) => setProduct(data))
//       .catch((error) => console.log(error));
//   }, [id]);

//   const handleCart = () => {
//     if (cartBtn === 'Add to Cart') {
//       dispatch(addItem(product));
//       setCartBtn('Remove from Cart');
//     } else {
//       dispatch(delItem(product));
//       setCartBtn('Add to Cart');
//     }
//   };

//   if (!product) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <>
//       <div className="container my-5 py-3">
//         <div className="row">
//           <div className="col-md-6 d-flex justify-content-center mx-auto product">
//             <img src={product.img} alt={product.title} height="400px" />
//           </div>
//           <div className="col-md-6 d-flex flex-column justify-content-center">
//             <h1 className="display-5 fw-bold">{product.title}</h1>
//             <hr />
//             <h2 className="my-4">${product.price}</h2>
//             {/* <p className="lead">{product.desc}</p> */}
//             <button onClick={handleCart} className="btn btn-outline-primary my-5">
//               {cartBtn}
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ProductDetail;


import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItem, delItem } from '../redux/actions/index';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';


const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const [cartBtn, setCartBtn] = useState('Add to Cart');
  const { id } = useParams();

  // We need to store useDispatch in a variable
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch the product details from your API using the 'id'
    // Replace `apiEndpoint` with your actual API endpoint
    fetch(`http://16.16.115.134:5000/api/FoodItems/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.log(error));
  }, [id]);

  const handleCart = () => {
    if (cartBtn === 'Add to Cart') {
      dispatch(addItem(product));
      setCartBtn('Remove from Cart');
    } else {
      dispatch(delItem(product));
      setCartBtn('Add to Cart');
    }
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <>
         <div className="container my-5 py-2">
            <div className="row py-5">
                <div className="col-md-6">
                    <img src={product.img} alt={product.title}height="400px" width="400px" />
                </div>
                <div className="col-md-6">
                    <h4 className='teext-uppercase text-black-50'>
                        {product.product}
                    </h4>
                    <h1 className="display-5 fw-bold">{product.title}</h1>
                    <hr />
                    <h2 className="display-6 fw-blod my-4">${product.price}</h2>
                    <p className="lead">{product.desc}</p>
                    <button onClick={()=>handleCart(product)} className="btn btn-outline-dark px-4 py-2">{cartBtn}</button>
                    <NavLink to="/cart" className="btn btn-dark ms-2 px-3 py-2">
                        Go to cart
                    </NavLink>
                </div>
            </div>
        </div>
    </>
  );
};

export default ProductDetail;
