import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarSaComponent } from './agregar-sa.component';

describe('AgregarSaComponent', () => {
  let component: AgregarSaComponent;
  let fixture: ComponentFixture<AgregarSaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarSaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarSaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
