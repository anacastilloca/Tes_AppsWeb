import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerTComponent } from './ver-t.component';

describe('VerTComponent', () => {
  let component: VerTComponent;
  let fixture: ComponentFixture<VerTComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerTComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
