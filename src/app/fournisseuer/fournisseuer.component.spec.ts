import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FournisseuerComponent } from './fournisseuer.component';

describe('FournisseuerComponent', () => {
  let component: FournisseuerComponent;
  let fixture: ComponentFixture<FournisseuerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FournisseuerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FournisseuerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
