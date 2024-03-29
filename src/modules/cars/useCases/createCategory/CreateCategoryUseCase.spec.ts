import { CreateCategoryUseCase } from './CreateCategoryUseCase';
import { AppError } from '@errors/AppError';
import { CategoriesRepositoryInMemory } from '@modules/cars/repositories/in-memory/CategoriesRepositoryInMemory';

let createCategoryUseCase: CreateCategoryUseCase;
let categoriesRepositoryInMemory: CategoriesRepositoryInMemory;

describe('Create category', () => {
  beforeEach(() => {
    categoriesRepositoryInMemory = new CategoriesRepositoryInMemory();
    createCategoryUseCase = new CreateCategoryUseCase(categoriesRepositoryInMemory);
  });

  it('should be able to create a new category', async () => {
    const category = {
      name: 'Category Test',
      description: 'Category description test',
    };

    await createCategoryUseCase.execute({ ...category });

    const categoryCreated = await categoriesRepositoryInMemory.findByName(category.name);

    expect(categoryCreated).toBeTruthy();
  });

  it('should not be able to create a new category if name already exists', async () => {
    expect(async () => {
      const category = {
        name: 'Category Test',
        description: 'Category description test',
      };

      await createCategoryUseCase.execute({ ...category });

      await createCategoryUseCase.execute({ ...category });
    }).rejects.toBeInstanceOf(AppError);
  });
});
