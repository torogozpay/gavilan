import { Controller, Get, Param } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  @Get(':name')
  async findById(@Param('name') name: string): Promise<any> {
    return { name };
  }
}
