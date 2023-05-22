// import React, { useState } from 'react';
// import axios from 'axios';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleInputChange = (event) => {
//     if (event.target.name === 'email') {
//       setEmail(event.target.value);
//     } else if (event.target.name === 'password') {
//       setPassword(event.target.value);
//     }
//   };

//   const handleLogin = async (event) => {
//     event.preventDefault();

//     try {
//       const response = await axios.post('http://16.16.115.134:5000/login', {
//         email,
//         password
//       });

//       // Handle the login response as needed
//       console.log(response.data);
//     } catch (error) {
//       // Handle error
//       console.error(error);
//     }
//   };
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [loggedIn, setLoggedIn] = useState(false);
//   const [userName, setUserName] = useState('');

//   useEffect(() => {
//     // Check if user is already logged in
//     const isLoggedIn = localStorage.getItem('isLoggedIn');
//     const storedUserName = localStorage.getItem('userName');

//     if (isLoggedIn === 'true' && storedUserName) {
//       setLoggedIn(true);
//       setUserName(storedUserName);
//     }
//   }, []);

//   const handleInputChange = (event) => {
//     if (event.target.name === 'email') {
//       setEmail(event.target.value);
//     } else if (event.target.name === 'password') {
//       setPassword(event.target.value);
//     }
//   };

//   const handleLogin = async (event) => {
//     event.preventDefault();

//     try {
//       const response = await axios.post('http://16.16.115.134:5000/login', {
//         email,
//         password
//       });

//       // Handle the login response as needed
//       console.log(response.data);

//       // Update the logged in state and user name
//       setLoggedIn(true);
//       setUserName(response.data.name);

//       // Store the login status and user name in localStorage
//       localStorage.setItem('isLoggedIn', 'true');
//       localStorage.setItem('userName', response.data.name);

//       // Refresh the window
//       window.location.reload();
//     } catch (error) {
//       // Handle error
//       console.error(error);
//     }
//   };

//   const handleLogout = () => {
//     // Clear the login status and user name from localStorage
//     localStorage.removeItem('isLoggedIn');
//     localStorage.removeItem('userName');

//     // Update the logged in state and user name
//     setLoggedIn(false);
//     setUserName('');
//   };

//   if (loggedIn) {
//     return (
//       <>
//         {/* Display the user's name */}
//         <span className="me-auto">WELCOME</span>
//         <button className="btn btn-outline-primary ms-3" onClick={handleLogout}>
//           <span className="fa fa-sign-out me-1"></span> Logout
//         </button>
//       </>
//     );
//   }
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink, useHistory } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const history = useHistory();

  useEffect(() => {
    // Check if user is already logged in
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const storedUserName = localStorage.getItem('userName');

    if (isLoggedIn === 'true' && storedUserName) {
      setLoggedIn(true);
      setUserName(storedUserName);
    }
  }, []);

  const handleInputChange = (event) => {
    if (event.target.name === 'email') {
      setEmail(event.target.value);
    } else if (event.target.name === 'password') {
      setPassword(event.target.value);
    }
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://16.16.115.134:5000/login', {
        email,
        password
      });

      // Handle the login response as needed
      console.log(response.data);

      // Update the logged in state and user name
      setLoggedIn(true);
      setUserName(response.data.name);

      // Store the login status and user name in localStorage
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('userName', response.data.name);

      // Refresh the window and redirect to the "Product" page
      history.push('/products');
      window.location.reload();
    } catch (error) {
      // Handle error
      console.error(error);
    }
  };

  const handleLogout = () => {
    // Clear the login status and user name from localStorage
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userName');

    // Update the logged in state and user name
    setLoggedIn(false);
    setUserName('');

    // Redirect to the "Home" page
    history.push('/home');
  };

  if (loggedIn) {
    return (
      <>
        {/* Display the user's name */}
        <span className="me-auto">Welcome</span>
        <NavLink to="/home" className="btn btn-outline-primary ms-3" onClick={handleLogout}>
          <span className="fa fa-sign-out me-1"></span> Logout
        </NavLink>
      </>
    );
  }
  return (
    <>
      {/* Button trigger modal */}
      <button
        type="button"
        className="btn btn-outline-primary ms-auto"
        data-bs-toggle="modal"
        data-bs-target="#loginModal"
      >
        <span className="fa fa-sign-in me-1"></span> Login
      </button>

      {/* Modal */}
      <div className="modal fade" id="loginModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Login</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <button className="btn btn-primary w-100 mb-4">
                <span className="fa fa-google me-2"></span> Sign in With Google
              </button>
              <button className="btn btn-primary w-100 mb-4">
                <span className="fa fa-facebook me-2"></span> Sign in With Facebook
              </button>
              <form onSubmit={handleLogin}>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    name="email"
                    value={email}
                    onChange={handleInputChange}
                  />
                  <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    name="password"
                    value={password}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-3 form-check">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                  <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-outline-primary w-100 mt-5">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
