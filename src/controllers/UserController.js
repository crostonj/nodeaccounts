import UserService from '../services/userService.js';

class UserController {
    constructor() {
        this.userService = new UserService();
    }

    createUser(req, res) {
        const userData = req.body;
        const newUser = this.userService.createUser(userData);
        res.status(201).json(newUser);
    }

    getUser(req, res) {
        const userId = parseInt(req.params.id, 10);
        const user = this.userService.getUser(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(user);
    }

    updateUser(req, res) {
        const userId = parseInt(req.params.id, 10);
        const updatedData = req.body;
        const updatedUser = this.userService.updateUser(userId, updatedData);
        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(updatedUser);
    }

    deleteUser(req, res) {
        const userId = parseInt(req.params.id, 10);
        const deletedUser = this.userService.deleteUser(userId);
        if (!deletedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(deletedUser);
    }

    getAllUsers(req, res) {
        const users = this.userService.getAllUsers();
        res.json(users);
    }
}

export default UserController;
