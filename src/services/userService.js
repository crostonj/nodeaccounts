class UserService {
    constructor() {
        this.users = []; // In-memory storage for users
    }

    createUser(userData) {
        const newUser = { id: this.users.length + 1, ...userData };
        this.users.push(newUser);
        return newUser;
    }

    getUser(userId) {
        return this.users.find(user => user.id === userId);
    }

    updateUser(userId, updatedData) {
        const userIndex = this.users.findIndex(user => user.id === userId);
        if (userIndex === -1) return null;

        this.users[userIndex] = { ...this.users[userIndex], ...updatedData };
        return this.users[userIndex];
    }

    deleteUser(userId) {
        const userIndex = this.users.findIndex(user => user.id === userId);
        if (userIndex === -1) return null;

        const deletedUser = this.users.splice(userIndex, 1);
        return deletedUser[0];
    }

    getAllUsers() {
        return this.users;
    }
}

export default UserService;