import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators'

@Injectable({
  providedIn: 'root',
})
export class Task {
  private tasks = [
    { id: 1, title: 'Préparer le cours angular'},
    { id: 2, title: 'Relire le module RxJs'},
    { id: 3, title: 'Corriger les TP\'s'}
  ];

  getTasks() {
    return of(this.tasks).pipe(delay(1000))
  }
}
