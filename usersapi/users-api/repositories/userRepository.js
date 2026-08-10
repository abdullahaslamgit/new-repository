let users = [
  {
    id: 1,
    name: "Ali",
    email: "ali@example.com",
    age: 24
  },
  {
    id: 2,
    name: "Ahmed",
    email: "ahmed@example.com",
    age: 26
  }
];

const findAll = () => {
  return users;
};

const findById = (id) => {
  return users.find((user) => user.id === Number(id));
};

const create = (user) => {
  users.push(user);

  return user;
};

const update = (id, updatedData) => {
  const index = users.findIndex(
    (user) => user.id === Number(id)
  );

  if (index === -1) {
    return null;
  }

  users[index] = {
    ...users[index],
    ...updatedData
  };

  return users[index];
};

const remove = (id) => {
  const index = users.findIndex(
    (user) => user.id === Number(id)
  );

  if (index === -1) {
    return null;
  }

  const deletedUser = users[index];

  users.splice(index, 1);

  return deletedUser;
};

module.exports = {
  findAll,
  findById,
  create,
  update,
  remove
};