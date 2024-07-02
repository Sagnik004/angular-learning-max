import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DatePipe } from '@angular/common';

import { CardComponent } from '../../shared/card/card.component';
import { type Task } from './task.model';

@Component({
  selector: 'app-task',
  standalone: true,
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
  imports: [CardComponent, DatePipe],
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;

  @Output() complete = new EventEmitter<string>();

  onTaskComplete() {
    this.complete.emit(this.task.id);
  }
}
