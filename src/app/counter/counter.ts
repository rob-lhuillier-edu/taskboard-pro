import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.scss',
})
export class Counter {
  count: number;
  intervalId!: number;

  constructor() {
    this.count = 0;
  }

  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.count++;
    }, 500);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }
}
