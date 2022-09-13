import { PartialType } from '@nestjs/mapped-types';
import { CreateAnimalVaccineDto } from './create-animal_vaccine.dto';

export class UpdateAnimalVaccineDto extends PartialType(CreateAnimalVaccineDto) {}
