const { response } = require('express');

const apiGet = (req, res = response) => {
  res.json({
    ok: true,
    msg: 'get API',
  });
};

const apiPut = (req, res = response) => {
  res.json({
    ok: true,
    msg: 'put API',
  });
};

const apiPost = (req, res = response) => {
  const body = req.body;

  res.json({
    ok: true,
    body,
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
