const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  addAthought,
  removeAthought,
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
router.route('/:userId').get(getSingleUser).delete(deleteUser);

// /api/users/:userId/athoughts
router.route('/:userId/athoughts').post(addAthought);

// /api/users/:userId/athoughts/:athoughtId
router.route('/:userId/athoughts/:athoughtId').delete(removeAthought);

module.exports = router;
