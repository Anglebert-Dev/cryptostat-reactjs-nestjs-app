import { UsersService } from './users.service';
import { Controller, Post } from '@nestjs/common';
import { Body } from '@nestjs/common/decorators';
import { UserResponse } from './dto/response/user-response.dto';
import { CreateUserRequest } from './dto/request/create-user-request.dto';

@Controller('users')
export class UsersController {
  // access the userservice
  constructor(private readonly usersService: UsersService) {}
  @Post()
  async createUser(@Body() createUserRequest: CreateUserRequest): Promise<UserResponse> {
    return this.usersService.createUser(createUserRequest);
  }
}
