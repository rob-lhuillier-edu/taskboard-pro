import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common'
import { Task } from '../core/services/task';

@Component({
  selector: 'app-home',
  imports: [AsyncPipe],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  tasks$!: ReturnType<Task['getTasks']>;
  count: number;

  constructor(private taskService: Task) {
    this.tasks$ = this.taskService.getTasks();
    this.count = 0;
  }

  ngOnInit() {
    console.log('ngOnInit exécuté')
    setInterval(() => {
      this.count++;
    }, 500);
  }
}
