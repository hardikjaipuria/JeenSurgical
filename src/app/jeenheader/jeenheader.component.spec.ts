import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JeenheaderComponent } from './jeenheader.component';

describe('JeenheaderComponent', () => {
  let component: JeenheaderComponent;
  let fixture: ComponentFixture<JeenheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JeenheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JeenheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
