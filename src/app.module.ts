import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { strDatabase } from './common/common';
@Module({
  imports: [MongooseModule.forRoot(strDatabase()), AuthModule,UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
