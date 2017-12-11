import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarEComponent } from './editar-e.component';

describe('EditarEComponent', () => {
  let component: EditarEComponent;
  let fixture: ComponentFixture<EditarEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
