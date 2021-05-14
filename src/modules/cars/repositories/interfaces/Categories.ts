import { Category } from '@modules/cars/infra/typeorm/entities/Category';

export interface CreateCategoryDTO {
  name: string;
  description: string;
}

export interface Categories {
  findByName(name: string): Promise<boolean>;
  list(): Promise<Category[]>;
  create({ name, description }: CreateCategoryDTO): Promise<void>;
}
