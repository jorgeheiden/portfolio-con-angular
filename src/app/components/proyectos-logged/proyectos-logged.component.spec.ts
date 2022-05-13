import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectosLoggedComponent } from './proyectos-logged.component';

describe('ProyectosLoggedComponent', () => {
  let component: ProyectosLoggedComponent;
  let fixture: ComponentFixture<ProyectosLoggedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectosLoggedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProyectosLoggedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
