import { PartialType } from '@nestjs/mapped-types';
import { CreateVaccineDto } from './create-vaccine.dto';

export class UpdateVaccineDto extends PartialType(CreateVaccineDto) {}
