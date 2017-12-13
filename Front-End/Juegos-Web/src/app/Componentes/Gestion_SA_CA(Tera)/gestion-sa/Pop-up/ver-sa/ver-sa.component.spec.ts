import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerSaComponent } from './ver-sa.component';

describe('VerSaComponent', () => {
  let component: VerSaComponent;
  let fixture: ComponentFixture<VerSaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerSaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerSaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
