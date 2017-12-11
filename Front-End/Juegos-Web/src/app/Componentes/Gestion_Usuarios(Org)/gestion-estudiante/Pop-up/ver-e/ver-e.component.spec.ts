import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerEComponent } from './ver-e.component';

describe('VerEComponent', () => {
  let component: VerEComponent;
  let fixture: ComponentFixture<VerEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
