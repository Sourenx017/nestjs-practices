import { Injectable } from '@nestjs/common';
import { Task } from './task.model';

@Injectable()
export class TasksService {
  private tasks: Task[] = []; // In-memory storage

  // Method to get all tasks
  getAllTasks(): Task[] {
    return this.tasks;
  }

  // Method to get a single task by its ID
  getTaskById(id: number): Task {
    return this.tasks.find((task) => task.id === id);
  }

  // Method to create a new task
  createTask(title: string, description: string): Task {
    const task: Task = {
      id: this.tasks.length + 1,
      title,
      description,
      status: 'pending',
    };

    this.tasks.push(task);
    return task;
  }

  // Method to update a task's status
  updateTask(id: number, status: 'pending' | 'in progress' | 'done'): Task {
    const task = this.getTaskById(id);
    if (task) {
      task.status = status;
    }
    return task;
  }

  // Method to delete a task by ID
  deleteTask(id: number): void {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}
