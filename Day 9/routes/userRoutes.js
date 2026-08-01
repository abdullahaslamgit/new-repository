const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");
const validate = require("../middleware/validate");

const { body } = require("express-validator");


// Get all users
router.get("/", userController.getUsers);


// Get single user
router.get("/:id", userController.getUser);


// Create user
router.post(
    "/",
    [
        body("name")
            .notEmpty()
            .withMessage("Name is required")
    ],
    validate,
    userController.createUser
);


// Update user
router.put("/:id", userController.updateUser);


// Delete user
router.delete("/:id", userController.deleteUser);


module.exports = router;