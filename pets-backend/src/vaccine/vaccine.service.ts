import { Injectable } from '@nestjs/common';
import { CreateVaccineDto } from './dto/create-vaccine.dto';
import { Vaccine } from './entities/vaccine.entity';
import { VaccineDatabase } from './repository/VaccineRepository';

@Injectable()
export class VaccineService {
  constructor(private vaccineRepo: VaccineDatabase ){}
  public async create(createVaccineDto: CreateVaccineDto): Promise <Vaccine> {
    return await this.vaccineRepo.CreateVaccine(createVaccineDto); 
  }

  findAll() {
    return this.vaccineRepo.GetVaccines();
  }

  findOne(id: number) {
    return this.vaccineRepo.GetVaccinesById(id);
  }

  remove(id: number) {
    return this.vaccineRepo.deleteVaccine(id);
  }
}
