import { IsString, IsEmail, IsNotEmpty, IsIn } from 'class-validator';

export class RegisterUserDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsIn(['Admin', 'User'])
  role: string;
}
