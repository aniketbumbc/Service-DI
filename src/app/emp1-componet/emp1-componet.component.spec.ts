import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Emp1ComponetComponent } from './emp1-componet.component';

describe('Emp1ComponetComponent', () => {
  let component: Emp1ComponetComponent;
  let fixture: ComponentFixture<Emp1ComponetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Emp1ComponetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Emp1ComponetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
