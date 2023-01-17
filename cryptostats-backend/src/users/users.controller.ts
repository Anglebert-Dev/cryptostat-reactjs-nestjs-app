import { UsersService } from './users.service';
import { Controller, Post } from '@nestjs/common';
import { Body } from '@nestjs/common/decorators';
import { CreateUserRequest } from './dto/create-user-request.dtp';

@Controller('users')
export class UsersController {
  // access the userservice
  constructor(private readonly usersService: UsersService) {}
  @Post()
  async createUser(@Body() createUserRequest: CreateUserRequest): Promise<any> {
    return this.usersService.createUser(createUserRequest);
  }
}
