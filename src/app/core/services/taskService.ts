import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

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
  private searchSubject = new BehaviorSubject<string>('');
  private filterSubject = new BehaviorSubject<'all' | 'complete' | 'incomplete'>('all');
  tasks$ = combineLatest([
    this.taskSubject.asObservable(),
    this.searchSubject.asObservable(),
    this.filterSubject.asObservable()
  ]).pipe(
    map(([tasks, searchTerm, filter]) => {
      let filteredTasks = tasks;
      switch (filter) {
        case 'complete':
          filteredTasks = tasks.filter(t => t.completed === true);
          break;
        case 'incomplete':
          filteredTasks = tasks.filter(t => t.completed === false);
          break;
        default:
          filteredTasks = tasks;
      }
      if (searchTerm.trim()) {
        filteredTasks = filteredTasks.filter(t =>
          t.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }

      return filteredTasks;
    })
  );

  setSearchTerm(term: string) {
    this.searchSubject.next(term);
  }

  setFilter(filter: 'all' | 'complete' | 'incomplete') {
    this.filterSubject.next(filter);
  }

  getTaskById(id: number) : TaskItem | undefined {
    return this.tasks.find(t => t.id === id)
  }

  addTask(title: string) {
    const newTask: TaskItem = { id: Date.now(), title, completed: false };
    this.tasks = [...this.tasks, newTask];
    this.taskSubject.next(this.tasks);
  }

  removeTask(id: number) {
    this.tasks = this.tasks.filter(t => t.id !== id);
    this.taskSubject.next(this.tasks);
  }

  setComplete(id: number) {
    this.tasks = this.tasks.map(t =>
      t.id === id ? { ...t, completed: true} : t
    );
    this.taskSubject.next(this.tasks);
  }

  getByTitle(title: string): TaskItem | undefined {
    const task = this.tasks.find(t => t.title === title)
    return task
  }

  clearTasks() {
    this.tasks = new Array()
  }
  getComplete() {
    return this.tasks.filter(t => t.completed === true)
  }
  getIncomplete() {
    return this.tasks.filter(t => t.completed === false)
  }
}
