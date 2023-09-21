import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {InputButtonUnitComponent} from "../input-button-unit/input-button-unit.component";
import {TodoItemComponent} from "../todo-item/todo-item.component";
import {TodoItem} from "../../interfaces/todo-item";
import {TodoListService} from "../../services/todo-list.service";

@Component({
  selector: 'app-list-manager',
  standalone: true,
  imports: [CommonModule, InputButtonUnitComponent, TodoItemComponent],
  templateUrl: './list-manager.component.html',
  styleUrls: ['./list-manager.component.scss']
})
export class ListManagerComponent implements OnInit {
  todoList: TodoItem[];
  constructor(private todoListService: TodoListService) { }
  ngOnInit() {
    this.todoList = this.todoListService.getTodoList();
  }
  addItem(title: string) {
    this.todoListService.addItem({ title });
  }
  removeItem(item: TodoItem): void {
    this.todoListService.deleteItem(item);
  }
  updateItem(item: TodoItem, changes: TodoItem): void {
    this.todoListService.updateItem(item, changes);
  }
}
