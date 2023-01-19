import { UsersRepository } from './users.repository';
import { BadRequestException, Injectable } from '@nestjs/common';
import { hash , compare} from 'bcrypt';
import { UserResponse } from './dto/response/user-response.dto';
import { User } from './models/User';
import { CreateUserRequest } from './dto/request/create-user-request.dto';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}
  async createUser(
    createUserRequest: CreateUserRequest,
  ): Promise<UserResponse> {
    await this.validateCreateUserRequest(createUserRequest);
    const user = await this.usersRepository.insertOne({
      ...createUserRequest,
      password: await hash(createUserRequest.password, 10),
    });
    return this.buildResponse(user);
  }

  //
  async validateUser(email: string, password: string): Promise<UserResponse> {
    const user = await this.usersRepository.findOneByEmail(email);
    if (!user) {
      throw new BadRequestException(`User does not exist by email: ${email}`);
    }
    const isPasswordValid = await compare(password, user.password);
    if (!isPasswordValid) {
      throw new BadRequestException('Invalid Credentials');
    }

    return this.buildResponse(user);
  }

  // check if email already exist
  private async validateCreateUserRequest(
    createUserRequest: CreateUserRequest,
  ): Promise<void> {
    const user = await this.usersRepository.findOneByEmail(
      createUserRequest.email,
    );
    if (user) {
      throw new BadRequestException('This email already exists!');
    }
  }

  private buildResponse(user: User): UserResponse {
    return {
      _id: user._id.toHexString(),
      email: user.email,
    };
  }
}
