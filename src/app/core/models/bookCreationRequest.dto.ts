import { Author } from './author.model';
import { Category } from './category.model';

export class BookCreationRequestDTO {
  constructor(
    private name: string,
    private description: string,
    private price: number,
    private year: number,
    private author: Author,
    private publisher: string,
    private cover: string,
    private categories: Category[]
  ) {}
}
