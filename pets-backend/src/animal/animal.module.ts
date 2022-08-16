import { Module } from '@nestjs/common';
import { AnimalService } from './animal.service';
import { AnimalController } from './animal.controller';
import { AnimalDatabase } from './repository/AnimalDatabase';

@Module({
  controllers: [AnimalController],
  providers: [AnimalService, AnimalDatabase]
})
export class AnimalModule {}
