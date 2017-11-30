import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionEstudianteComponent } from './gestion-estudiante.component';

describe('GestionEstudianteComponent', () => {
  let component: GestionEstudianteComponent;
  let fixture: ComponentFixture<GestionEstudianteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionEstudianteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
