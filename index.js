// index.js
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const { dbConnect } = require("./config/config");
const userRoute = require("./routes/routes.js");

const app = express();
const port = process.env.PORT;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

dbConnect();

// CORS Setup
app.use(
  cors({
    origin: "https://test.bouncyboxstudio.in",
    credentials: true,
  })
);

app.use("/", userRoute);

app.get("/", (req, res) => {
  res.send("Hello from server");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
