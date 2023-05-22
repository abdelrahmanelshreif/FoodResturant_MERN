const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 5000;
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const MONGODB_URI =
  "mongodb+srv://abdelrahman93955:css@cluster0.en4bwyr.mongodb.net/FoodTimeResturant?retryWrites=true&w=majority";

// Import routes
const routes = require("./src/routes/routes");
const adminAuth = require("./src/middleware/adminAuth");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(cookieParser());

// Mongoose
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    app.listen(port, () => {
      console.log(
        `Example app listening at http://localhost:${port} Connected To DB ♥`
      );
    });
  })
  .catch((err) => {
    console.log(err);
  });

// Use routes
app.use("/", routes);

//---------------------------------
//Authorization
// app.use("/menu/add",adminAuth.authToken,routes);
// app.use("/menu/update/:id",adminAuth.authToken,routes);
// app.use("/menu/remove/:id",adminAuth.authToken,routes);
