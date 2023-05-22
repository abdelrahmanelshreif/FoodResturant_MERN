  import React, { useState } from 'react';
  import './Admin.css';
  import { useHistory } from 'react-router-dom';
  import axios from 'axios';

  const Admin = () => {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
      e.preventDefault();
      setError('');

      try {
        const response = await axios.post('http://localhost/login', { email, password } );;

        if (response) {
          console.log('User is an admin');
          history.push('/crud');
        } else {
          console.log('User is not an admin');
          history.push('/home');
        }
      } catch (error) {
        console.error(error);
        setError('Sorry Sir, Your Are Not Admin or Enter Correct Password');
      }
    };

    return (
      <div className="wrapper bg-dark d-flex align-items-center justify-content-center">
        <div className="login">
          <h2 className="mb-3">Login For Admin</h2>
          <form className="needs-validation" onSubmit={handleLogin}>
            <div className="form-group was-validated mb-2">
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                className="form-control"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="invalid-feedback">Please Enter Your Email</div>
            </div>
            <div className="form-group was-validated mb-2">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="invalid-feedback">Please Enter Your Password</div>
            </div>
            {error && <div className="text-danger mb-2">{error}</div>}
            <div className="form-group form-check mb-2">
              <input type="checkbox" className="form-check-input" />
              <label htmlFor="check" className="form-check-label">
                Remember Me
              </label>
            </div>
            <button type="submit" className="btn btn-success w-100 mt-2">
              SIGN IN
            </button>
          </form>
        </div>
      </div>
    );
  };

  export default Admin;
