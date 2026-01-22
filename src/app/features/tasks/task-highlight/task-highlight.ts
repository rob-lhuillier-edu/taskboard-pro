import { Component, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { TaskItem } from '../../../model/TaskItem';


@Component({
  selector: 'app-task-highlight',
  changeDetection: ChangeDetectionStrategy.OnPush, 
  standalone: true,
  templateUrl: './task-highlight.html',
  styleUrl: './task-highlight.scss',
})
export class TaskHighlight {
  @Input() task: TaskItem | null = null;

  @Output() close = new EventEmitter<void>();

  onClose() {
    this.close.emit();
  }
}