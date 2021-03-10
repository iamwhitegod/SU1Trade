const express = require("express");
const viewsController = require("../controllers/viewsController");
const authController = require("../controllers/authController");

const router = express.Router();

// router.use(viewsController.alerts);

router.get("/", authController.isLoggedIn, viewsController.getHomepage);
// router.get("/login", authController.isLoggedIn, viewsController.getLoginForm);
// router.get("/signup", authController.signup, viewsController.getSignupForm);
// router.get("/me", authController.protect, viewsController.getAccount);

module.exports = router;
