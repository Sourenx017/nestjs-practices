import { Injectable } from '@nestjs/common';
import { User } from './user.model';

@Injectable()
export class UsersService {
  private users: User[] = [];
  private idCounter = 1;

  getAllUsers(): User[] {
    return this.users;
  }

  getUserById(id: number): User {
    return this.users.find((user) => user.id === id);
  }

  createUser(
    username: string,
    email: string,
    password: string,
    role: 'admin' | 'user',
  ): User {
    const newUser: User = {
      id: this.idCounter++,
      username,
      email,
      password,
      role,
    };
    this.users.push(newUser);
    return newUser;
  }

  updateUser(
    id: number,
    username: string,
    email: string,
    role: 'admin' | 'user',
  ): User {
    const user = this.getUserById(id);
    if (user) {
      user.username = username;
      user.email = email;
      user.role = role;
    }
    return user;
  }

  deleteUser(id: number): void {
    this.users = this.users.filter((user) => user.id !== id);
  }
}
