import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarSaComponent } from './editar-sa.component';

describe('EditarSaComponent', () => {
  let component: EditarSaComponent;
  let fixture: ComponentFixture<EditarSaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarSaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarSaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
