const userRepository = require("../repositories/userRepository");

const getAllUsers = ({ page = 1, limit = 10, name, email } = {}) => {
  let users = userRepository.findAll();

  // Filtering
  if (name) {
    users = users.filter((user) =>
      user.name.toLowerCase().includes(name.toLowerCase())
    );
  }

  if (email) {
    users = users.filter((user) =>
      user.email.toLowerCase().includes(email.toLowerCase())
    );
  }

  // Pagination
  const totalUsers = users.length;
  const totalPages = Math.ceil(totalUsers / limit);

  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;

  const paginatedUsers = users.slice(startIndex, endIndex);

  return {
    users: paginatedUsers,
    pagination: {
      page,
      limit,
      totalUsers,
      totalPages
    }
  };
};

const getUserById = (id) => {
  return userRepository.findById(id);
};

const createUser = (userData) => {
  const users = userRepository.findAll();

  const newUser = {
    id: users.length + 1,
    ...userData
  };

  return userRepository.create(newUser);
};

const updateUser = (id, userData) => {
  return userRepository.update(id, userData);
};

const deleteUser = (id) => {
  return userRepository.remove(id);
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
};