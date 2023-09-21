import {Component, EventEmitter, Input, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import {TodoItem} from "../../interfaces/todo-item";
import {tick} from "@angular/core/testing";

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent {
  @Input() item: TodoItem;
  @Output() remove: EventEmitter<TodoItem> = new EventEmitter<TodoItem>();
  @Output() update: EventEmitter<any> = new EventEmitter<any>();

  removeItem(): void {
    this.remove.emit(this.item);
  }
  completeItem(): void {
    this.update.emit({
      item: this.item,
      changes: {completed: !this.item.completed}
    });
  }
}
