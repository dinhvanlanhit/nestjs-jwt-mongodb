import { IsNotEmpty, MinLength, MaxLength, IsEmail, IsString } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class LoginUserDto {

    @ApiModelProperty({
      example: 'admin@gmail.com',
      description: 'The email of the User',
      format: 'email',
      uniqueItems: true,
      minLength: 5,
      maxLength: 255,
    })
    @IsNotEmpty()
    @IsString()
    @MinLength(5)
    @MaxLength(255)
    readonly email: string;
    @ApiModelProperty({
      example: '123456',
      description: 'The password of the User',
      format: 'string',
      minLength: 5,
      maxLength: 1024,
    })
    @IsNotEmpty()
    @IsString()
    @MinLength(5)
    @MaxLength(1024)
    readonly password: string;
  }
