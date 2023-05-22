const bcrypt = require("bcrypt");
const User = require("../models/user");
const jwt = require("jsonwebtoken");

function createToken(userId, isAdmin) {
  const payload = {
    user: userId,
    isAdmin: isAdmin, // Set the value based on the admin status
  };

  const token = jwt.sign(payload, process.env.SECRET_KEY_FOR_JWT, {
    expiresIn: "1h", // Set an appropriate expiration time
  });

  return token;
}

// Controller function for the signup route
async function signup(req, res) {
  try {
    const { username, email, password } = req.body;

    // Generate a salt with a cost factor of 10
    const salt = await bcrypt.genSalt(10);

    // Hash the plain-text password with the generated salt
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user instance with the hashed password
    const user = new User({
      username,
      email,
      password: hashedPassword,
    });

    // Save the user record
    await user.save();

    console.log("User saved successfully:", user);
    res.status(200).json({ message: "User saved successfully" });
  } catch (error) {
    console.error("Error saving user:", error);
    res.status(500).json({ error: error.message });
  }
}

// Controller function for the get user by username route
async function getUserByUsername(req, res) {
  try {
    const username = req.params.username;
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch user" });
  }
}

// Controller function for the login route
async function login(req, res) {
  try {
    const { email, password } = req.body;

    // Find the user by email
    const user = await User.findOne({ email });

    if (!user) {
      // User not found
      return res.status(404).json({ error: "User not found" });
    }

    // Compare the provided password with the hashed password in the user record
    const auth = await bcrypt.compare(password, user.password);

    if (auth) {
      // Passwords match, user is authenticated
      // Proceed with further actions, such as generating a token or granting access
      console.log("Password is valid");

      if (auth) {
        const token = createToken(user._id, user.isAdmin);
        console.log("token", token);
        res.cookie("jwt", token);
        res.send(user);
      }
      // Check if the user is an admin based on __v property
      if (user.__v === 1) {
        console.log("Authentication successful");
        // Perform admin-specific actions
      }
    } else {
      // Passwords don't match
      console.log("Password is invalid");
      res.status(401).json({ error: "Invalid password" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

// Controller function for the admin login route
async function adminLogin(req, res) {
  try {
    const { email, password } = req.body;

    // Find the user by email
    const user = await User.findOne({ email });

    if (!user) {
      // User not found
      return res.status(404).json({ error: "User not found" });
    }

    // Compare the provided password with the hashed password in the user record
    const auth = await bcrypt.compare(password, user.password);

    if (auth) {
      // Passwords match, user is authenticated
      // Proceed with further actions, such as generating a token or granting access
      console.log("Password is valid");

      if (auth) {
        const token = createToken(user._id, user.isAdmin);
        console.log("token", token);
        res.cookie("jwt", token);
        res.send(user);
      }
      // Check if the user is an admin based on __v property
      if (user.__v === 1) {
        console.log("Authentication successful");
        // Perform admin-specific actions
      }

      // res.send.json({ message: "Authentication successful" });
    } else {
      // Passwords don't match
      console.log("Password is invalid");
      res.status(401).json({ error: "Invalid password" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

module.exports = {
  signup,
  getUserByUsername,
  login,
  adminLogin,
};
