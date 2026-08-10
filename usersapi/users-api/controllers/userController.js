const userService = require("../services/userService");
const { userSchema, paginationSchema } = require("../schemas/userSchema");

const getUsers = (req, res) => {
  const result = paginationSchema.safeParse(req.query);

  if (!result.success) {
    return res.status(400).json({
      success: false,
      message: "Invalid query parameters",
      errors: result.error.issues.map((issue) => ({
        field: issue.path[0],
        message: issue.message
      }))
    });
  }

  const { page, limit, name, email } = result.data;

  const users = userService.getAllUsers({
    page,
    limit,
    name,
    email
  });

  res.status(200).json({
    success: true,
    message: "Users retrieved successfully",
    data: users.users,
    pagination: users.pagination
  });
};

const getUserById = (req, res) => {
  const user = userService.getUserById(req.params.id);

  if (!user) {
    return res.status(404).json({
      success: false,
      message: "User not found"
    });
  }

  res.status(200).json({
    success: true,
    message: "User retrieved successfully",
    data: user
  });
};

const createUser = (req, res) => {
  const result = userSchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({
      success: false,
      message: "Validation failed",
      errors: result.error.issues.map((issue) => ({
        field: issue.path[0],
        message: issue.message
      }))
    });
  }

  const user = userService.createUser(result.data);

  res.status(201).json({
    success: true,
    message: "User created successfully",
    data: user
  });
};

const updateUser = (req, res) => {
  const validation = updateUserSchema.safeParse(req.body);

  if (!validation.success) {
    return res.status(400).json({
      success: false,
      message: "Validation failed",
      errors: validation.error.issues.map((issue) => ({
        field: issue.path[0],
        message: issue.message
      }))
    });
  }

  const user = userService.updateUser(
    req.params.id,
    validation.data
  );

  if (!user) {
    return res.status(404).json({
      success: false,
      message: "User not found"
    });
  }

  res.status(200).json({
    success: true,
    message: "User updated successfully",
    data: user
  });
};

const patchUser = (req, res) => {
  const validation = patchUserSchema.safeParse(req.body);

  if (!validation.success) {
    return res.status(400).json({
      success: false,
      message: "Validation failed",
      errors: validation.error.issues.map((issue) => ({
        field: issue.path[0],
        message: issue.message
      }))
    });
  }

  const user = userService.updateUser(
    req.params.id,
    validation.data
  );

  if (!user) {
    return res.status(404).json({
      success: false,
      message: "User not found"
    });
  }

  res.status(200).json({
    success: true,
    message: "User partially updated successfully",
    data: user
  });
};

const deleteUser = (req, res) => {
  const user = userService.deleteUser(req.params.id);

  if (!user) {
    return res.status(404).json({
      success: false,
      message: "User not found"
    });
  }

  res.status(200).json({
    success: true,
    message: "User deleted successfully",
    data: user
  });
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  patchUser,
  deleteUser
};