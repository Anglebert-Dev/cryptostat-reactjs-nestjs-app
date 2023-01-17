import { IsEmail } from "class-validator";
import { IsNotEmpty, IsString } from "class-validator/types/decorator/decorators";

export class CreateUserRequest{
    @IsEmail()
    email:string;

    @IsString()
    @IsNotEmpty()
    password:string;
}