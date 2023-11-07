import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormUserReactiveComponent } from './form-user-reactive.component';

describe('FormUserReactiveComponent', () => {
  let component: FormUserReactiveComponent;
  let fixture: ComponentFixture<FormUserReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormUserReactiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormUserReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
