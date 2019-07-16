import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableNotesComponent } from './available-notes.component';

describe('AvailableNotesComponent', () => {
  let component: AvailableNotesComponent;
  let fixture: ComponentFixture<AvailableNotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvailableNotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailableNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
