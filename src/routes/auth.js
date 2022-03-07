const express = require("express");
const router = express.Router();
const signupHandler = require("../controllers/signup");
const signinHandler = require("../controllers/signin");
const authLogic = require("../middleware/auth");

router.post("/signup", signupHandler);
router.post("/signin", authLogic, signinHandler);

module.exports = router;
