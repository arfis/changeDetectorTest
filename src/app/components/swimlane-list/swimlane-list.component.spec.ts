import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwimlaneListComponent } from './swimlane-list.component';

describe('SwimlaneListComponent', () => {
  let component: SwimlaneListComponent;
  let fixture: ComponentFixture<SwimlaneListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwimlaneListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwimlaneListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
