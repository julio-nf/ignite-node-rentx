import { Cars } from '../interfaces/Cars';
import { CreateCarDTO } from '@modules/cars/dtos/CreateCarDTO';
import { Car } from '@modules/cars/infra/typeorm/entities/Car';

export class CarsRepositoryInMemory implements Cars {
  cars: Car[] = [];

  async create({
    name,
    description,
    dailyRate,
    licensePlate,
    brand,
    fineAmount,
    categoryId,
  }: CreateCarDTO): Promise<Car> {
    const car = new Car();

    Object.assign(car, {
      name,
      description,
      dailyRate,
      licensePlate,
      brand,
      fineAmount,
      categoryId,
    });

    this.cars.push(car);

    return car;
  }

  async findByLicensePlate(licensePlate: string): Promise<Car | undefined> {
    return this.cars.find((car) => car.licensePlate === licensePlate);
  }

  async findAvailable(name?: string, brand?: string, categoryId?: string): Promise<Car[]> {
    return this.cars.filter((car) => {
      if (!car.available) return null;

      if (name || brand || categoryId) {
        if (car.name === name || car.brand === brand || car.categoryId === categoryId) {
          return car;
        }

        return null;
      }

      return car;
    });
  }
}
