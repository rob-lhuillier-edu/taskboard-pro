import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.scss',
})
export class Counter {
  count: number;

  constructor() {
    this.count = 0;
  }

  ngOnInit() {
    setInterval(() => {
      this.count++;
    }, 500);
  }
}
