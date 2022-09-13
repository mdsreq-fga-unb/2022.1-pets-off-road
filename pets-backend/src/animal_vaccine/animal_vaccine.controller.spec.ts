import { Test, TestingModule } from '@nestjs/testing';
import { AnimalVaccineController } from './animal_vaccine.controller';
import { AnimalVaccineService } from './animal_vaccine.service';

describe('AnimalVaccineController', () => {
  let controller: AnimalVaccineController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AnimalVaccineController],
      providers: [AnimalVaccineService],
    }).compile();

    controller = module.get<AnimalVaccineController>(AnimalVaccineController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
