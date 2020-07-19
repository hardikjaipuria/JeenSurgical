import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemechangeComponent } from './themechange.component';

describe('ThemechangeComponent', () => {
  let component: ThemechangeComponent;
  let fixture: ComponentFixture<ThemechangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemechangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemechangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
