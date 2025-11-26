import { Component, inject } from '@angular/core';
import { TaskService } from '../../../core/services/taskService'

@Component({
  selector: 'app-task-form',
  imports: [],
  templateUrl: './task-form.html',
  styleUrl: './task-form.scss',
})
export class TaskForm {
  taskService = inject(TaskService)

  addTask(title: string) {
    if (title) {
      this.taskService.addTask(title);
    }
  }
}
