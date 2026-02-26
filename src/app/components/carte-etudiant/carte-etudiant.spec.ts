import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CarteEtudiantComponent } from './carte-etudiant';

describe('CarteEtudiantComponent', () => {
  let component: CarteEtudiantComponent;
  let fixture: ComponentFixture<CarteEtudiantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarteEtudiantComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarteEtudiantComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
