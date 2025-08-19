class UserService {
    // v2: update only first and last name
    updateUserNameV2(userId, firstName, lastName) {
        const userIndex = this.users.findIndex(user => user.id === userId);
        if (userIndex === -1) return null;

        // Store first and last name as separate fields, and update name field for compatibility
        this.users[userIndex].firstName = firstName;
        this.users[userIndex].lastName = lastName;
        this.users[userIndex].name = `${firstName} ${lastName}`;
        return this.users[userIndex];
    }
    constructor() {
       this.users = [
            { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
            { id: 2, name: 'Jane Doe', email: 'jane.doe@example.com' }
        ];
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