import { Test, TestingModule } from '@nestjs/testing';
import { AnimalController } from './animal.controller';
import { AnimalService } from './animal.service';
import {Animal} from './entities/animal.entity';

const animalEntityList: Animal[] = [({
  matricula:1,
  project_id:1,
  nome:'a',
  especie:'b',
  idade:1,
  condicao_saude:true,
  castrado:false,
  criado_em:'a',
  modificado_em:'a'}),
({
  matricula:2,
  project_id:1,
  nome:'a',
  especie:'b',
  idade:1,
  condicao_saude:true,
  castrado:true,
  criado_em:'a',
  modificado_em:'ab'})
]

describe('AnimalController', () => {
  let animalController: AnimalController;
  let animalService: AnimalService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AnimalController],
      providers: [{
        provide: AnimalService,
        useValue: {
          findAll: jest.fn().mockResolvedValue(animalEntityList),
          create: jest.fn(),
        },
      }],
    }).compile();

    animalController = module.get<AnimalController>(AnimalController);
    animalService = module.get<AnimalService>(AnimalService);
  });

  it('should be defined', () => {
    expect(animalController).toBeDefined();
    expect(animalService).toBeDefined();
  });

  describe('findAll', ()=> {
    it('should return a animal list entity sucessfully', async () => {
      //Act
      const result = await animalController.findAll();

      //Assert
      expect(result).toEqual(animalEntityList);
    })
  })
});
