import { Component, inject, input, ViewChild, ViewContainerRef } from '@angular/core';
import { AsyncPipe } from '@angular/common'
import { TaskService, TaskItem } from '../../core/services/taskService';
import { Counter } from '../../counter/counter';
import { TaskForm } from './task-form/task-form';
import { TaskHighlight } from './task-highlight/task-highlight';
import { map } from 'rxjs/operators';

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
  selectedStatus?: boolean;

  @ViewChild('highlightContainer', { read: ViewContainerRef })
  container!: ViewContainerRef;

  ngOnInit() {
    console.log('ngOnInit exécuté')
  }

  displayField() {
    this.field = true;
  }

  removeTask(id: number) {
    this.taskService.removeTask(id);
  }

  highlight(id: number) {
    this.container.clear();

    const ref = this.container.createComponent(TaskHighlight);

    ref.instance.title = this.taskService.getTitle(id);
  }

  endTask(id: number) {
    this.taskService.endTask(id);
  }

  onSelected(event: Event) {
    this.tasks$ = this.taskService.tasks$;
    const value = (event.target as HTMLSelectElement).value;
    if (value === 'complete') {
      this.tasks$ = this.tasks$.pipe(
        map(tasks => tasks.filter(t => t.completed))
      )
    };
    if (value === 'incomplete') {
      this.tasks$ = this.tasks$.pipe(
        map(tasks => tasks.filter(t => !t.completed))
      )
    };
  }
}
