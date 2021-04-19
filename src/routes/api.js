const { Router } = require('express');
const { apiGet, apiPut, apiPost, apiDelete } = require('../controllers/api');

const router = Router();

router.get('/', apiGet);

router.put('/', apiPut);

router.post('/', apiPost);

router.delete('/', apiDelete);

module.exports = router;
