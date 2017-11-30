import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmPrincipalComponent } from './adm-principal.component';

describe('AdmPrincipalComponent', () => {
  let component: AdmPrincipalComponent;
  let fixture: ComponentFixture<AdmPrincipalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmPrincipalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
