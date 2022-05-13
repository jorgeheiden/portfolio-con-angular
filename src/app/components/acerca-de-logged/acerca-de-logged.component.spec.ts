import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcercaDeLoggedComponent } from './acerca-de-logged.component';

describe('AcercaDeLoggedComponent', () => {
  let component: AcercaDeLoggedComponent;
  let fixture: ComponentFixture<AcercaDeLoggedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcercaDeLoggedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcercaDeLoggedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
