const { response, request } = require('express');

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
