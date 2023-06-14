const express = require("express");
const router = express.Router();
const { matchedData } = require("express-validator");

const { login, register } = require("../controllers/auth");

router.post("/register", async (req, res) => {
  let data = await register(req.body);
  if (data && data.err) {
    res.status(data.code || 500);
    data = {
      error: data.err,
    };
  }
  res.send(data);
});

router.post("/login", async (req, res) => {
  let data = await login(req.body);
  if (data && data.err) {
    res.status(data.code || 500);
    data = {
      error: data.err,
    };
  }
  res.send(data);
});

module.exports = router;
