import { Injectable } from '@nestjs/common';
import { UserRepository } from '../repositories/user.repository';
import { UserDto } from '../repositories/user.dto';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) { }


  async findAll(): Promise<UserDto[]> {
    return await this.userRepository.findAll();
  }

  async create(user: UserDto): Promise<UserDto> {
    return await this.userRepository.create(user);
  }
}
