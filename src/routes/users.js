const { Router } = require('express');
const { check } = require('express-validator');

const { apiGet, apiPut, apiPost, apiDelete } = require('../controllers/users');

const { isRoleValid, emailExits } = require('../db/validators');
const { validateFields } = require('../middlewares/validate-fields');

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
    check('email').custom(emailExits),
    check('role').custom(isRoleValid),
    validateFields,
  ],
  apiPost
);

router.delete('/', apiDelete);

module.exports = router;
