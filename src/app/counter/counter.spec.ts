import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Counter } from './counter';
import { provideRouter } from '@angular/router';

describe('Counter', () => {
  let component: Counter;
  let fixture: ComponentFixture<Counter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Counter],
      providers: [
        provideRouter([])
      ],
    })
      .compileComponents();

    fixture = TestBed.createComponent(Counter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
