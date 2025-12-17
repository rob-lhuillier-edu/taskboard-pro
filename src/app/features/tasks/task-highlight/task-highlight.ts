import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task-highlight',
  imports: [],
  templateUrl: './task-highlight.html',
  styleUrl: './task-highlight.scss',
})
export class TaskHighlight {
  @Input() title = '';
}
