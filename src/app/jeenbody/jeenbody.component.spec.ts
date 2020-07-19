import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JeenbodyComponent } from './jeenbody.component';

describe('JeenbodyComponent', () => {
  let component: JeenbodyComponent;
  let fixture: ComponentFixture<JeenbodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JeenbodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JeenbodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
