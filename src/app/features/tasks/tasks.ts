import { Component, inject, input } from '@angular/core';
import { AsyncPipe } from '@angular/common'
import { TaskService } from '../../core/services/taskService';
import { Counter } from '../../counter/counter';
import { TaskForm } from './task-form/task-form';
import { FormControl } from '@angular/forms';
import { ChildActivationEnd } from '@angular/router';

@Component({
  selector: 'app-tasks',
  imports: [AsyncPipe, Counter, TaskForm],
  templateUrl: './tasks.html',
  styleUrl: './tasks.scss',
})
export class Tasks {

  taskService = inject(TaskService)
  tasks$ = this.taskService.tasks$;
  field = false;

  ngOnInit() {
    console.log('ngOnInit exécuté')
  }

/*   addTask(title: string) {
      this.taskService.addTask(title);
      this.field = false;
  } */

  displayField() {
    this.field = true;
  }

  removeTask(id: number) {
    this.taskService.removeTask(id)
  }
}
