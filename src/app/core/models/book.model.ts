import { Author } from './author.model';
import { Category } from './category.model';

export class Book {
  public id: number;
  public name: string;
  public description: string;
  public price: number;
  public year: number;
  public author: Author;
  public publisher: string;
  public cover: string;
  public categories: Category[];

  constructor(
    id: number,
    name: string,
    description: string,
    price: number,
    year: number,
    author: Author,
    publisher: string,
    cover: string,
    categories: Category[]
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.year = year;
    this.author = author;
    this.publisher = publisher;
    this.cover = cover;
    this.categories = categories;
  }
}
