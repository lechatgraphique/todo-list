import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputButtonUnitComponent } from './input-button-unit.component';

describe('InputButtonUnitComponent', () => {
  let component: InputButtonUnitComponent;
  let fixture: ComponentFixture<InputButtonUnitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [InputButtonUnitComponent]
    });
    fixture = TestBed.createComponent(InputButtonUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
