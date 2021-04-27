const { Router } = require('express');
const { check } = require('express-validator');

const { apiGet, apiPut, apiPost, apiDelete } = require('../controllers/users');
const { validateFields } = require('../middlewares/validate-fields');

const Role = require('../models/role');

const router = Router();

router.get('/', apiGet);

router.put('/:id', apiPut);

router.post(
  '/',
  [
    check('name', 'The name must be present.').not().isEmpty(),
    check('password', "Password's length must be 6 or more.").isLength({
      min: 6,
    }),
    check('email', 'The email is not valid.').isEmail(),
    check('role').custom(async (role = '') => {
      const exists = await Role.findOne({ role });

      if (!exists) {
        throw new Error(`Role ${role} is not registered in BD`);
      }
    }),
    validateFields,
  ],
  apiPost
);

router.delete('/', apiDelete);

module.exports = router;
