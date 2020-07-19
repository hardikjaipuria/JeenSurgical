import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JeenfooterComponent } from './jeenfooter.component';

describe('JeenfooterComponent', () => {
  let component: JeenfooterComponent;
  let fixture: ComponentFixture<JeenfooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JeenfooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JeenfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
