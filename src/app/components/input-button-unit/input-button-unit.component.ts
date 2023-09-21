import {Component, EventEmitter, Output} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-input-button-unit',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input-button-unit.component.html',
  styleUrls: ['./input-button-unit.component.scss']
})
export class InputButtonUnitComponent {
  @Output() submit: EventEmitter<string> = new EventEmitter<string>();
  title: string = null;
  changeTitle(newTitle: string): void {
    newTitle ? this.submit.emit(newTitle) : '';
  }
}
