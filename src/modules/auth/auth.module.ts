import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtStrategy } from './strategies/jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from 'src/modules/user/schemas/user.schema';
import { RefreshTokenSchema } from './schemas/refresh-token.schema';
import { AuthController } from './controllers/auth.admin.controller';
import { AuthClientController } from './controllers/auth.client.controller';
import { UserService } from './../user/user.service';
import { ForgotPasswordSchema } from './../user/schemas/forgot-password.schema';
@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'User', schema: UserSchema },
      { name: 'RefreshToken', schema: RefreshTokenSchema },
    ]),
    PassportModule,
    JwtModule.register({
      secret: process.env.SERVER_JWT_SECRET,
      signOptions: { expiresIn: process.env.SERVER_JWT_EXPIRATION },
    }),
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
    MongooseModule.forFeature([{ name: 'ForgotPassword', schema: ForgotPasswordSchema}]),
  ],
  controllers: [AuthController,AuthClientController],
  providers: [AuthService,UserService,JwtStrategy],
  exports: [AuthService,UserService],
})
export class AuthModule {}
