const { response, request } = require('express');
const { validationResult } = require('express-validator');
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
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json(errors);
  }

  const { name, email, password, role } = req.body;
  const user = new User({ name, email, password, role });

  if (await User.findOne({ email })) {
    return res.status(400).json({
      message: 'That email is already registered.',
    });
  }

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
