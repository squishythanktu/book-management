export class User {
    public id: number;
    public name: string;
    public username: string;
    public role: string;

    constructor(id: number, name: string, username: string, role: string) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.role = role;
    }
}