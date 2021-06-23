const { response, request } = require('express');
const bcryptjs = require('bcryptjs');

const User = require('../models/user');

const apiGet = (req = request, res = response) => {
  const { name = 'No name', apiKey } = req.query;

  res.json({
    ok: true,
    name,
    apiKey,
  });
};

const apiPut = (req, res = response) => {
  const id = req.params.id;

  res.json({
    ok: true,
    msg: 'put API',
    id,
  });
};

const apiPost = async (req, res = response) => {
  const { name, email, password, role } = req.body;
  const user = new User({ name, email, password, role });

  const salt = bcryptjs.genSaltSync();
  user.password = bcryptjs.hashSync(password, salt);

  await user.save();

  res.json({
    user,
  });
};

const apiDelete = (req, res = response) => {
  res.json({
    ok: true,
    msg: 'delete API',
  });
};

module.exports = {
  apiGet,
  apiPut,
  apiPost,
  apiDelete,
};
