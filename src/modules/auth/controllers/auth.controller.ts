import { Controller, Post, Body } from '@nestjs/common';
import { AuthenticationService } from '../services/authentication.service';
import { UserDto } from './user.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthenticationService) { }

  @Post('login')
  async login(@Body() credentials: UserDto) {
    const token = await this.authService.login(
      credentials.username,
      credentials.password,
    );
    if (token) {
      return { token };
    } else {
      throw new Error('Nombre de usuario o contraseña incorrectos');
    }
  }
}
