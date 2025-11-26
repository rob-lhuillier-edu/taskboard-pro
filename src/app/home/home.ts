import { Component } from '@angular/core';
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
  tasks$!: ReturnType<Task['getTasks']>;

  constructor(private taskService: Task) {
    this.tasks$ = this.taskService.getTasks();
  }

  ngOnInit() {
    console.log('ngOnInit exécuté')
  }
}
