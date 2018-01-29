import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Emp2ComponetComponent } from './emp2-componet.component';

describe('Emp2ComponetComponent', () => {
  let component: Emp2ComponetComponent;
  let fixture: ComponentFixture<Emp2ComponetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Emp2ComponetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Emp2ComponetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
