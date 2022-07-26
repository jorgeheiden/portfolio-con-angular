import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienciaLoggedComponent } from './experiencia-logged.component';

describe('ExperienciaLoggedComponent', () => {
  let component: ExperienciaLoggedComponent;
  let fixture: ComponentFixture<ExperienciaLoggedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienciaLoggedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienciaLoggedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
