import { Component, inject, ChangeDetectionStrategy, ViewChild, ViewContainerRef } from '@angular/core';
import { AsyncPipe } from '@angular/common'
import { TaskService, TaskItem } from '../../core/services/taskService';
import { Counter } from '../../counter/counter';
import { TaskForm } from './task-form/task-form';
import { TaskHighlight } from './task-highlight/task-highlight';
import { TaskSearch } from './task-search/task-search';

@Component({
  selector: 'app-tasks',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AsyncPipe, Counter, TaskForm, TaskSearch, TaskHighlight],
  templateUrl: './tasks.html',
  styleUrl: './tasks.scss',
})
export class Tasks {
  taskService = inject(TaskService)
  tasks$ = this.taskService.tasks$;
  field = false;
  selectedStatus?: boolean;
  searchTerm: string = '';
  highlightedTask: TaskItem | null = null;
  showHighlight = false;

  ngOnInit() {
    console.log('ngOnInit exécuté')
  }

  highlight(id: number) {
    const task = this.taskService.getTaskById(id);
    if (task) {
      this.highlightedTask = task;
      this.showHighlight = true;
    }
  }

  closeHighlight() {
    this.showHighlight = false;
    this.highlightedTask = null;
  }

  onSearchChange(value: string) {
    this.taskService.setSearchTerm(value);
  }

  displayField() {
    this.field = true;
  }

  removeTask(id: number) {
    this.taskService.removeTask(id);
  }

  endTask(id: number) {
    this.taskService.setComplete(id);
  }

  onSelected(event: Event) {
    const value = (event.target as HTMLSelectElement).value as 'all' | 'complete' | 'incomplete';
    this.taskService.setFilter(value);
  }
}
