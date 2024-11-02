// Simulación de base de datos
const users = [];

exports.saveUser = (user) => {
  users.push(user);
  return user;
};

exports.getUser = (username) => {
  return users.find(user => user.username === username);
};
