import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { delay } from 'rxjs/operators';

export interface TaskItem {
  id: number;
  title: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks: TaskItem[] = [
    { id: 1, title: 'Préparer le cours angular', completed: false },
    { id: 2, title: 'Relire le module RxJs', completed: false },
    { id: 3, title: 'Corriger les TP\'s', completed: false }
  ];

  private taskSubject = new BehaviorSubject<TaskItem[]>(this.tasks);
  tasks$ = this.taskSubject.asObservable();

  getTitle(id: number): string {
    const task = this.tasks.find(t => t.id === id);
    return task ? task.title : '';
  }

  addTask(title: string) {
    const newTask: TaskItem = { id: Date.now(), title, completed: false };
    this.tasks = [...this.tasks, newTask];
    this.taskSubject.next(this.tasks);
  }

  getTasks() {
    return of(this.tasks).pipe(delay(1000));
  }

  removeTask(id: number) {
    this.tasks = this.tasks.filter(t => t.id !== id);
    this.taskSubject.next(this.tasks);
  }

  endTast(id: number) {
    const toEnd = this.tasks.find(t => t.id === id);
    if(toEnd) {
      toEnd.completed = !toEnd.completed;
    }
  }
}
