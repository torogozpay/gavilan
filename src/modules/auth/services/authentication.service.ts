import { Injectable } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthenticationService {
  private users = [
    { id: 1, username: 'usuario1', password: 'contraseña1' },
    { id: 2, username: 'usuario2', password: 'contraseña2' },
  ];

  async login(username: string, password: string): Promise<string | null> {
    const user = this.users.find(
      (u) => u.username === username && u.password === password,
    );

    if (!user) {
      return null; // Usuario no encontrado
    }

    const token = jwt.sign(
      { id: user.id, username: user.username },
      'secreto',
      { expiresIn: '1h' },
    );

    return token;
  }
}

export default AuthenticationService;
