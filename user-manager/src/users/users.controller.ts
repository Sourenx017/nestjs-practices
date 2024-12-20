import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.model';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getAllUsers(): User[] {
    return this.usersService.getAllUsers();
  }

  @Get(':id')
  getUserById(@Param('id') id: string): User {
    return this.usersService.getUserById(+id);
  }

  @Post()
  createUser(
    @Body('username') username: string,
    @Body('email') email: string,
    @Body('password') password: string,
    @Body('role') role: 'admin' | 'user',
  ): User {
    return this.usersService.createUser(username, email, password, role);
  }

  @Put(':id')
  updateUser(
    @Param('id') id: string,
    @Body('username') username: string,
    @Body('email') email: string,
    @Body('role') role: 'admin' | 'user',
  ): User {
    return this.usersService.updateUser(+id, username, email, role);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string): void {
    this.usersService.deleteUser(+id);
  }
}
