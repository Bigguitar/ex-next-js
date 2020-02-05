import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { CreateUserRequest } from './create-user.request';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get('/')
  public findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  public findOne(@Param('id') id: string): Promise<User> {
    return this.usersService.findOne(id);
  }

  @Post('/')
  public create(@Body() request: CreateUserRequest): Promise<User> {
    return this.usersService.create(request);
  }
}
