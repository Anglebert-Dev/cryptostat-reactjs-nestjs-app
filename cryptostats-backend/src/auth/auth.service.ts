import { Injectable } from '@nestjs/common';
import { UserResponse } from 'src/users/dto/response/user-response.dto';

@Injectable()
export class AuthService {
    login(user: UserResponse, response: Response) {
        throw new Error('Method not implemented.');
    }
    async loginUser () {
        return 'Login Repository connections'
    }
}
