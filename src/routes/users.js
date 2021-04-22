const { Router } = require('express');
const { check } = require('express-validator');
const { apiGet, apiPut, apiPost, apiDelete } = require('../controllers/users');

const router = Router();

router.get('/', apiGet);

router.put('/:id', apiPut);

router.post(
  '/',
  [check('email', 'The email is not valid.').isEmail()],
  apiPost
);

router.delete('/', apiDelete);

module.exports = router;
