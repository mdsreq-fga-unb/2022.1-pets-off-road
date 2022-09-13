import { Module } from '@nestjs/common';
import { VaccineService } from './vaccine.service';
import { VaccineController } from './vaccine.controller';
import { VaccineDatabase } from './repository/VaccineRepository';

@Module({
  controllers: [VaccineController],
  providers: [VaccineService, VaccineDatabase],
})
export class VaccineModule {}
