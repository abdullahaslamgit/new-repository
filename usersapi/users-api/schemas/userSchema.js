const { z } = require("zod");

// POST
const userSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  age: z.number().int().positive("Age must be a positive number")
});

// PUT
// All fields are required
const updateUserSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  age: z.number().int().positive("Age must be a positive number")
});

// PATCH
// All fields are optional
const patchUserSchema = updateUserSchema.partial();

const paginationSchema = z.object({
  page: z.coerce.number().int().positive().default(1),
  limit: z.coerce.number().int().positive().max(100).default(10),
  name: z.string().optional(),
  email: z.string().optional()
});

module.exports = {
  userSchema,
  updateUserSchema,
  patchUserSchema,
  paginationSchema
};