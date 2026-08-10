const express = require("express");
const userRoutes = require("./routes/userRoutes");
const errorHandler = require("./middleware/errorHandler");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Users API is running"
  });
});

app.use("/api/users", userRoutes);

app.use(errorHandler);

module.exports = app;