import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignacionJuegosEstudianteComponent } from './asignacion-juegos-estudiante.component';

describe('AsignacionJuegosEstudianteComponent', () => {
  let component: AsignacionJuegosEstudianteComponent;
  let fixture: ComponentFixture<AsignacionJuegosEstudianteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignacionJuegosEstudianteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignacionJuegosEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
