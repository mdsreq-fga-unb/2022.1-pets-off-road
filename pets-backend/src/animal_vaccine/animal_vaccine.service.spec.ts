import { Test, TestingModule } from '@nestjs/testing';
import { AnimalVaccineService } from './animal_vaccine.service';

describe('AnimalVaccineService', () => {
  let service: AnimalVaccineService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AnimalVaccineService],
    }).compile();

    service = module.get<AnimalVaccineService>(AnimalVaccineService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
