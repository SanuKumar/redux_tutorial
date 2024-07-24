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

module.exports = { getUsers, getUserProfile };
