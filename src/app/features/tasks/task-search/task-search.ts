import { Component, inject, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { TaskService } from '../../../core/services/taskService';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-task-search',
  imports: [ ReactiveFormsModule ],
  templateUrl: './task-search.html',
  styleUrl: './task-search.scss',
})
export class TaskSearch {
  taskService = inject(TaskService);
  searchControl = new FormControl('');

  ngOnInit() {
    this.searchControl.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged()
    ).subscribe(searchTerm => {
      this.taskService.setSearchTerm(searchTerm || '' );
    })
  }
  clearSearch() {
    this.searchControl.setValue('');
  }
}
