import { Book } from "./book.model";

export class Author {
    public id: number;
    public name: string;
    public website: string;
    public birthday: Date;
    public cover: string;
    public books: Book[];

    constructor(id: number, name: string, website: string, birthday: Date, cover: string, books: Book[]) {
        this.id = id;
        this.name = name;
        this.website = website;
        this.birthday = birthday;
        this.cover = cover;
        this.books = books;
    }
}