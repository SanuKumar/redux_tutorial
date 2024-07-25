const asyncHandler = require("express-async-handler");
const axios = require("axios");

const getUsers = asyncHandler(async (req, res) => {
  const user = await axios.get(`https://jsonplaceholder.typicode.com/users`);

  res.json(user.data);
});

const getUserProfile = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const [user, img] = await Promise.all([
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`),
    axios.get(`https://robohash.org/${id}`),
  ]);
  user.data.img = img.config.url;
  res.json(user.data);
});

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  const users = await axios.get(`https://jsonplaceholder.typicode.com/users`);
  users.data = users.data.filter((user) => user.email === email);
  if (users.data.length === 0) {
    res.status(401);
    throw new Error("Invalid email or password");
  }
  res.json(users.data[0]);
});

module.exports = { getUsers, getUserProfile, authUser };
