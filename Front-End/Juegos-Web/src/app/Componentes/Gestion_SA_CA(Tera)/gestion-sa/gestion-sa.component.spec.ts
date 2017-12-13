import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionSaComponent } from './gestion-sa.component';

describe('GestionSaComponent', () => {
  let component: GestionSaComponent;
  let fixture: ComponentFixture<GestionSaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionSaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionSaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
