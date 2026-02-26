import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatistiquesComponent } from './statistiques';

describe('StatistiquesComponent', () => {
  let component: StatistiquesComponent;
  let fixture: ComponentFixture<StatistiquesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatistiquesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatistiquesComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
