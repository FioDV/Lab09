class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    viewData() {
        return `Welcome, ${this.name}! You are viewing the website data.`;
    }
}

class Admin extends User {
    editData() {
        return `Admin ${this.name} is editing the website data.`;
    }
}

const admin1 = new Admin('Bob', 'bob@example.com');
console.log(admin1.viewData()); 
console.log(admin1.editData());