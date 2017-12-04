import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarTComponent } from './eliminar-t.component';

describe('EliminarTComponent', () => {
  let component: EliminarTComponent;
  let fixture: ComponentFixture<EliminarTComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EliminarTComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
