import 'reflect-metadata';

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { UsersModule } from './users/users.module';

import { DatabaseModule } from './config/Database.Module';


@Module({
  imports: [DatabaseModule,UsersModule, ],
  controllers: [AppController, AuthController],
  providers: [AppService, AuthService],
})
export class AppModule {}
