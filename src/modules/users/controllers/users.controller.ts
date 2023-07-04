import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from '../services/users.service';
import { UserDto } from '../repositories/user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UserService) { }

  @Get()
  async findAll() {
    return await this.userService.findAll();
  }

  @Post()
  async create(@Body() user: UserDto): Promise<UserDto> {
    return await this.userService.create(user);
  }
}
