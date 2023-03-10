
/*
let employee = {
    name: "bob",
    id: 12,
    email: "bob@company.net"
}
*/

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name
    }

    getId() {
        return this.id
    }

    getEmail() {
        return this.email
    }

    getRole() {
        return "Employee"
    }

}





module.exports = Employee;
//let newEmployee = new Employee("bob", 11, "bob@company.net");
//let sarah = new Employee("sarah", 15, "sarah@company.net");
