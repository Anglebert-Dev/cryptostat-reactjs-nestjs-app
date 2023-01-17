import { UsersRepository } from './users.repository';
import { CreateUserRequest } from './dto/create-user-request.dtp';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    constructor(private readonly usersRepository:UsersRepository){}
    async createUser(createUserRequest:CreateUserRequest):Promise<any>{
        return this.usersRepository.insertOne(createUserRequest);
    }
}
