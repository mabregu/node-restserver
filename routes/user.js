const { Router } = require('express');
const { getUsers, getUser, createUser, updateUser, deleteUser, getMyJson } = require('../controllers/user');
const router = Router();

router.get('/', getUsers);

router.get('/json', getMyJson);

router.get('/:id', getUser);

router.put('/:id', updateUser);

router.post('/', createUser);

router.delete('/:id', deleteUser);

module.exports = router;