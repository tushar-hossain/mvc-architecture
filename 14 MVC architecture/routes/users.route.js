const express = require("express");
const router = express.Router();
const { homeRoute, getUsers, saveUsers, error } = require("../controllers/users.controller");

router.get("/", homeRoute);
router.get("/users", getUsers);
router.post("/users", saveUsers);

router.use(error);

module.exports = router;
