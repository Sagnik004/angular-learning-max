import { Injectable } from '@angular/core';

import { type NewTask } from './new-task/new-task.model';

@Injectable({ providedIn: 'root' })
export class TasksService {
  private userTasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-08-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-07-20',
    },
  ];

  getUserTasks(userId: string) {
    return this.userTasks.filter((task) => task.userId === userId);
  }

  addNewTask(newTaskData: NewTask, userId: string) {
    const newTaskId = 't' + (this.userTasks.length + 1);
    const newTaskObj = {
      id: newTaskId,
      userId,
      title: newTaskData.title,
      summary: newTaskData.summary,
      dueDate: newTaskData.dueDate,
    };
    this.userTasks.push(newTaskObj);
  }

  removeTask(taskId: string) {
    this.userTasks = this.userTasks.filter((task) => task.id !== taskId);
  }
}
