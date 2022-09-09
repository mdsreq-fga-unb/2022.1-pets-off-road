import { Module } from '@nestjs/common';
import { VaccineService } from './vaccine.service';
import { VaccineController } from './vaccine.controller';

@Module({
  controllers: [VaccineController],
  providers: [VaccineService]
})
export class VaccineModule {}
