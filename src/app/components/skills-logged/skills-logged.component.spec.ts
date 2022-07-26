import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsLoggedComponent } from './skills-logged.component';

describe('SkillsLoggedComponent', () => {
  let component: SkillsLoggedComponent;
  let fixture: ComponentFixture<SkillsLoggedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsLoggedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsLoggedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
