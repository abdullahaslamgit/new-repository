const User = require("../models/User");


// Get All Users
const getAllUsers = async () => {

    return await User.find();

};


// Get Single User
const getUserById = async (id) => {

    return await User.findById(id);

};


// Create User
const createUser = async (userData) => {

    const user = await User.create(userData);

    return user;

};


// Update User
const updateUser = async (id, userData) => {

    return await User.findByIdAndUpdate(
        id,
        userData,
        {
            new:true
        }
    );

};


// Delete User
const deleteUser = async (id) => {

    return await User.findByIdAndDelete(id);

};


module.exports = {

    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser

};