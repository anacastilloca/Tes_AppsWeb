import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarEComponent } from './eliminar-e.component';

describe('EliminarEComponent', () => {
  let component: EliminarEComponent;
  let fixture: ComponentFixture<EliminarEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EliminarEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
