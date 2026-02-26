import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accueil',
  standalone: true,
  templateUrl: './accueil.html',
})
export class AccueilComponent {
  nomProfesseur: string = 'M. Jordan';
  nombreEtudiants = signal(6);

  constructor(private router: Router) {}

  allerVersNotes(): void {
    this.router.navigate(['/liste-notes']);
  }
}
