import { IsNotEmpty, MinLength, MaxLength, IsEmail, IsString } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class CreateUserDto {

    // fullname
    @ApiModelProperty({
      example: 'E-GATE ADMIN',
      description: 'Tên tài khoản',
      format: 'string',
      minLength: 6,
      maxLength: 255,
    })
    @IsNotEmpty()
    @IsString()
    @MinLength(5)
    @MaxLength(255)
    readonly fullname: string;

    // Email
    @ApiModelProperty({
      example: 'admin@gmail.com',
      description: 'Email',
      format: 'email',
      uniqueItems: true,
      minLength: 5,
      maxLength: 255,
    })
    @IsNotEmpty()
    @IsString()
    @MinLength(5)
    @MaxLength(255)
    @IsEmail()
    readonly email: string;

    // Password
    @ApiModelProperty({
      example: '123456',
      description: 'Mật khẩu',
      format: 'string',
      minLength: 5,
      maxLength: 1024,
    })
    @ApiModelProperty()
    @IsNotEmpty()
    @IsString()
    @MinLength(5)
    @MaxLength(1024)
    readonly password: string;
  }
