import { LocalStrategy } from './strategies/local.strategies';
import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";



@Module({
  imports:[],
  controllers: [AuthController],
  providers: [AuthService ,  LocalStrategy],
})
export class AuthModule {}
