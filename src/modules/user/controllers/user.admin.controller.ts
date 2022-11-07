import { Roles } from '../../auth/decorators/roles.decorator';
import { ResetPasswordDto } from '../dto/reset-password.dto';
import { CreateForgotPasswordDto } from '../dto/create-forgot-password.dto';
import { Request } from 'express';
import { LoginUserDto } from '../dto/login-user.dto';
import { Controller, Get, Post, Body, UseGuards, Req, HttpCode, HttpStatus } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { VerifyUuidDto } from '../dto/verify-uuid.dto';
import { UserService } from '../user.service';
import { AuthGuard, PassportModule } from '@nestjs/passport';
import { RefreshAccessTokenDto } from '../dto/refresh-access-token.dto';
import {
    ApiCreatedResponse,
    ApiOkResponse,
    ApiUseTags,
    ApiBearerAuth,
    ApiImplicitHeader,
    ApiOperation,
    } from '@nestjs/swagger';
import { RolesGuard } from '../../auth/guards/roles.guard';

@ApiUseTags('User Admin')
@Controller('admin/user')
@UseGuards(RolesGuard)
export class UserController {
    constructor(
        private readonly userService: UserService,
        ) {}
    @Get('getAll')
    @UseGuards(AuthGuard('jwt'))
    @Roles('admin')
    @ApiBearerAuth()
    @ApiOperation({title: 'A private route for check the auth',})
    @ApiImplicitHeader({
        name: 'Bearer',
        description: 'the token we need for auth.'
    })
    @HttpCode(HttpStatus.OK)
    @ApiOkResponse({})
    findAll() {
        return this.userService.findAll();
    }
}
