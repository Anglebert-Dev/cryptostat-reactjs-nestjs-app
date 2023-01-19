import { UserResponse } from '../users/dto/response/user-response.dto';
import { AuthService } from './auth.service';
import { Controller, Post, Res, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { response } from 'express';
import { CurrentUser } from 'src/current-user.decorator';

@Controller('auth')
export class AuthController {
    constructor(private authService:AuthService){}

    @UseGuards(LocalAuthGuard)
    @Post('login')
    async Login(
        @CurrentUser() user : UserResponse,
        @Res({passthrough:true}) response :Response
    ):Promise<void>{
        await this.authService.login(user , response);
        response.json(user)
    }
}
