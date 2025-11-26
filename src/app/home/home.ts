import { Component, inject, input } from '@angular/core';
import { AsyncPipe } from '@angular/common'
import { Task } from '../core/services/task';
import { Counter } from '../counter/counter';

@Component({
  selector: 'app-home',
  imports: [AsyncPipe, Counter],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

  taskService = inject(Task)
  tasks$ = this.taskService.tasks$;
  field = false;
title: any;

  ngOnInit() {
    console.log('ngOnInit exécuté')
  }

  addTask(title: string) {
    this.taskService.addTask(title);
    this.field = false;
  }

  setField() {
    this.field = true;
  }
}
