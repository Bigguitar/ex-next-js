import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { CreateUserRequest } from './create-user.request';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  public findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  public findOne(id: string): Promise<User> {
    return this.usersRepository.findOne(id);
  }

  public create(request: CreateUserRequest): Promise<User> {
    const user = this.usersRepository.create(request);

    return this.usersRepository.save(user);
  }
}
