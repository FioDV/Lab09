class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    viewData() {
        return `Welcome, ${this.name}! You are viewing the website data.`;
    }
}

// Example
const user1 = new User('Alice', 'alice@example.com');
console.log(user1.viewData());