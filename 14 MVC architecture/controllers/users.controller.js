const path = require("path");
const { users } = require("../models/users.model");

exports.homeRoute = (req, res) => {
  res.send("I am home route");
};

exports.getUsers = (req, res) => {
  res.sendFile(path.join(__dirname + "/../views/index.html"));
};

exports.saveUsers = (req, res) => {
  const name = req.body.name;
  const age = req.body.age;
  const user = { name, age };
  users.push(user);
  res.status(200).json({
    success: true,
    users,
  });
};

exports.error = (req, res) => {
  res.status(404).json({
    message: "bad request",
  });
};
