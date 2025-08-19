import express from 'express';
import UserController from '../controllers/UserController.js';

const router = express.Router();
const userController = new UserController();

router.post('/', userController.createUser);
router.get('/:id', userController.getUser);
router.put('/:id/update', userController.updateUserV2);
router.put('/:id/update-v2', userController.updateUserNameV2);
router.delete('/:id', userController.deleteUser);

export default router; // Export the router directly