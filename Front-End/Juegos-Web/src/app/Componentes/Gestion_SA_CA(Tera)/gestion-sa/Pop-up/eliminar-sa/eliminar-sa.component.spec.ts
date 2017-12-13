import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarSaComponent } from './eliminar-sa.component';

describe('EliminarSaComponent', () => {
  let component: EliminarSaComponent;
  let fixture: ComponentFixture<EliminarSaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EliminarSaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarSaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
