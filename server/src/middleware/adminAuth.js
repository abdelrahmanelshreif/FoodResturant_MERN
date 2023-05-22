const express = require('express');
const app = express();
const jwt = require("jsonwebtoken");
const cookieParser = require('cookie-parser');
app.use(cookieParser());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000'); 
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  next();
});


async function authToken(req, res, next) {
  try {
    const token = req.cookies.jwt;
    let decodedToken;

    if (token) {
      decodedToken = jwt.verify(token, process.env.SECRET_KEY_FOR_JWT);
      if (decodedToken.isAdmin) {
        // User is an admin
        console.log("User is an admin");
        console.log(decodedToken);
        next();
      } else {
        // User is not an admin or token verification failed
        console.log("Invalid token or user is not an admin");
        res.status(401).json({ error: "Authentication failed" });
      }
    } else {
      // console.log(decodedToken)
      console.log("No token found in the cookie!");
      res.status(401).json({ error: "Authentication failed" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

module.exports = {
  authToken,
};
