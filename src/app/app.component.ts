import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InputButtonUnitComponent} from "./components/input-button-unit/input-button-unit.component";
import {TodoItemComponent} from "./components/todo-item/todo-item.component";
import {TodoItem} from "./interfaces/todo-item";
import {ListManagerComponent} from "./components/list-manager/list-manager.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, InputButtonUnitComponent, TodoItemComponent, ListManagerComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo-list';
}
