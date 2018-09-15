import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WedDecoratorComponentComponent } from './wed-decorator-component.component';

describe('WedDecoratorComponentComponent', () => {
  let component: WedDecoratorComponentComponent;
  let fixture: ComponentFixture<WedDecoratorComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WedDecoratorComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WedDecoratorComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
