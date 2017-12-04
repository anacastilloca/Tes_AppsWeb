import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarTComponent } from './editar-t.component';

describe('EditarTComponent', () => {
  let component: EditarTComponent;
  let fixture: ComponentFixture<EditarTComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarTComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
