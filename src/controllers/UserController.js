import UserService from '../services/userService.js';

class UserController {
    userService;

    constructor() {
        this.userService = new UserService();
    }

    /**
     * @swagger
     * /users:
     *   post:
     *     summary: Create a new user
     *     tags:
     *       - Users
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             properties:
     *               name:
     *                 type: string
     *               email:
     *                 type: string
     *     responses:
     *       201:
     *         description: User created successfully
     *       400:
     *         description: Invalid input
     */
    createUser = (req, res) => {
        const userData = req.body;
        const newUser = this.userService.createUser(userData);
        res.status(201).json(newUser);
    }

    /**
     * @swagger
     * /users/{id}:
     *   get:
     *     summary: Get a user by ID
     *     tags:
     *       - Users
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         schema:
     *           type: integer
     *         description: The user ID
     *     responses:
     *       200:
     *         description: User found
     *       404:
     *         description: User not found
     */
    getUser = (req, res) => {
        const userId = parseInt(req.params.id, 10);
        const user = this.userService.getUser(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(user);
    }

    /**
     * @swagger
     * /users/{id}:
     *   put:
     *     summary: Update a user by ID
     *     tags:
     *       - Users
     *       - appreciated
     *     deprecated: true
     *     description: |
     *       This endpoint is deprecated and will be removed in future versions. 
     *       Please use the `/users/{id}/update` endpoint instead.
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         schema:
     *           type: integer
     *         description: The user ID
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             properties:
     *               name:
     *                 type: string
     *               email:
     *                 type: string
     *     responses:
     *       200:
     *         description: User updated successfully
     *       404:
     *         description: User not found
     */
    updateUser = (req, res) => {
        const userId = parseInt(req.params.id, 10);
        const updatedData = req.body;
        const updatedUser = this.userService.updateUser(userId, updatedData);
        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(updatedUser);
    }

    /**
     * @swagger
     * /users/{id}:
     *   delete:
     *     summary: Delete a user by ID
     *     tags:
     *       - Users
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         schema:
     *           type: integer
     *         description: The user ID
     *     responses:
     *       200:
     *         description: User deleted successfully
     *       404:
     *         description: User not found
     */
    deleteUser = (req, res) => {
        const userId = parseInt(req.params.id, 10);
        const deletedUser = this.userService.deleteUser(userId);
        if (!deletedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(deletedUser);
    }

    /**
     * @swagger
     * /users:
     *   get:
     *     summary: Get all users
     *     tags:
     *       - Users
     *     responses:
     *       200:
     *         description: A list of users
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 type: object
     *                 properties:
     *                   id:
     *                     type: integer
     *                   name:
     *                     type: string
     *                   email:
     *                     type: string
     */
    getAllUsers = (req, res) => {
        const users = this.userService.getAllUsers();
        res.json(users);
    }
}

export default UserController;
