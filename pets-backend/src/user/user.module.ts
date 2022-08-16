import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserDatabase } from './repository/UserDatabase';

@Module({
  controllers: [UserController],
  providers: [UserService, UserDatabase],
})
export class UserModule {}
