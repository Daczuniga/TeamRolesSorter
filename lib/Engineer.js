class Engineer {
    constructor(name, id, email, githubUsername) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.githubUsername = githubUsername;
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
    getGithubUsername() {
        return this.githubUsername
    }

    getRole() {
        return "Engineer"
    }

}





module.exports = Engineer;