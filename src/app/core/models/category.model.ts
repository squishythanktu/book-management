import { Book } from './book.model';

export class Category {
  public id: number;
  public name: string;
  public description: string;
  public books: Book[];

  constructor(id: number, name: string, description: string, books: Book[]) {
    this.id = id;
    this.name = name;
    this.description = description;
    // if (books) {
    this.books = books;
    // }
  }
}
