import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DJComponentComponent } from './djcomponent.component';

describe('DJComponentComponent', () => {
  let component: DJComponentComponent;
  let fixture: ComponentFixture<DJComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DJComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DJComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
