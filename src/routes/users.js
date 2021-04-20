const { Router } = require('express');
const { apiGet, apiPut, apiPost, apiDelete } = require('../controllers/users');

const router = Router();

router.get('/', apiGet);

router.put('/:id', apiPut);

router.post('/', apiPost);

router.delete('/', apiDelete);

module.exports = router;
