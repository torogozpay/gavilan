import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthController } from './modules/auth/controllers/auth.controller';
import { AuthenticationService } from './modules/auth/services/authentication.service';

@Module({
  imports: [],
  controllers: [AppController, AuthController],
  providers: [AppService, AuthenticationService],
})
export class AppModule { }
