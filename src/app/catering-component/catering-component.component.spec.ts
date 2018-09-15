import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CateringComponentComponent } from './catering-component.component';

describe('CateringComponentComponent', () => {
  let component: CateringComponentComponent;
  let fixture: ComponentFixture<CateringComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CateringComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CateringComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
