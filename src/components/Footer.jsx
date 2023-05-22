// import React from 'react';
// import restaurantImage from '../imgs/ffff.jpg';

// const Footer = () => {
//   return (
//     <footer className="py-5" style={{ backgroundImage: `url(${restaurantImage})`, backgroundSize: 'cover', color: 'white' }}>
//       <div className="container">
//         <div className="row">
//           <div className="col-md-6">
//             <h3 className="mb-4">About Us</h3>
//             <p className="mb-4">
//               We are a family-owned restaurant that has been serving delicious food to our customers for over 20 years. Our menu includes a variety of dishes made with fresh and locally sourced ingredients.
//             </p>
//           </div>
//           <div className="col-md-6 d-flex justify-content-end align-items-center">
//             <img src={restaurantImage} alt="Restaurant" style={{ maxWidth: '100%', height: 'auto', borderRadius: '50%' }} />
//           </div>
//         </div>
//         <div className="row mt-5">
//           <div className="col-md-4">
//             <h5 className="mb-3">Address</h5>
//             <p>123 Main St<br/>Anytown, USA</p>
//           </div>
//           <div className="col-md-4">
//             <h5 className="mb-3">Hours</h5>
//             <p>Monday-Saturday: 11am-10pm<br/>Sunday: 12pm-8pm</p>
//           </div>
//           <div className="col-md-4">
//             <h5 className="mb-3">Contact Us</h5>
//             <p>Phone: (555) 555-5555<br/>Email: info@restaurant.com</p>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

// export default Footer;

import React from 'react';
import restaurantImage from '../imgs/ffff.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faPhone,faEnvelope  } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="py-4" style={{ backgroundImage: `url(${restaurantImage})`, backgroundSize: 'cover', color: 'white' }}>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h3 className="mb-3">About Us</h3>
            <p className="mb-4">
              We are a family-owned restaurant that has been serving delicious food to our customers for over 20 years. Our menu includes a variety of dishes made with fresh and locally sourced ingredients.
            </p>
          </div>
          <div className="col-md-6">
            {/* Remove the image tag here */}
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-4">
            <h5>Address</h5>
            <p>123 Main St, Anytown USA</p>
          </div>
          <div className="col-md-4">
            <h5>Hours</h5>
            <p>Monday-Saturday: 11am-10pm<br/>Sunday: 12pm-8pm</p>
          </div>
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <p><FontAwesomeIcon icon={faPhone} /> Phone: (555) 555-5555<br/> <FontAwesomeIcon icon={faEnvelope} />Email: info@restaurant.com</p>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-12 text-center">
            <FontAwesomeIcon icon={faInstagram} size="2x" className="me-3" />
            <FontAwesomeIcon icon={faFacebook} size="2x" className="me-3" />
            <FontAwesomeIcon icon={faTwitter} size="2x" className="me-3" />
            {/* Add more icons and their respective links here */}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;