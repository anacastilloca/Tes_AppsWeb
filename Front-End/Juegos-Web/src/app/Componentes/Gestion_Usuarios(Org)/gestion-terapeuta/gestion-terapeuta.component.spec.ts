import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionTerapeutaComponent } from './gestion-terapeuta.component';

describe('GestionTerapeutaComponent', () => {
  let component: GestionTerapeutaComponent;
  let fixture: ComponentFixture<GestionTerapeutaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionTerapeutaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionTerapeutaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
