import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioLoggedComponent } from './portfolio-logged.component';

describe('PortfolioLoggedComponent', () => {
  let component: PortfolioLoggedComponent;
  let fixture: ComponentFixture<PortfolioLoggedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioLoggedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioLoggedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
