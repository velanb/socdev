const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

//Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//require the routes
const users = require("./routes/api/users");
const profile = require("./routes/api/profile");
const posts = require("./routes/api/posts");

//mongoose db
const db = require("./config/keys").mongoURI;

//connect to mongoose
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("Mongo DB connected"))
  .catch(err => console.log(err));

app.get("/", (req, res) => {
  res.send("hello");
});

//passport middleware
app.use(passport.initialize());

//Passport Config
require("./config/passport");
//Using the routes
app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/posts", posts);

//Setting up port
const port = process.env.PORT || 5000;

// Listen the application
app.listen(port, () => console.log(`The server is running in port ${port}`));
