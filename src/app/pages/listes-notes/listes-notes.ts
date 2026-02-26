import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { Etudiant } from '../../models/etudiant.model';
import { CarteEtudiantComponent } from '../../components/carte-etudiant/carte-etudiant';



@Component({
  selector: 'app-liste-notes',
  standalone: true,
  imports: [FormsModule, NgFor, NgIf, CarteEtudiantComponent],
  templateUrl: './listes-notes.html',
})
export class ListeNotesComponent {
  filtreClasse: string = 'tous';

  etudiantsSignal = signal<Etudiant[]>([
    { id: 1, nom: 'Martin',  prenom: 'Alice',  notes: [18, 15, 17, 14], classe: '6ème' },
    { id: 2, nom: 'Bernard', prenom: 'Lucas',  notes: [8, 9, 6, 11],   classe: '5ème' },
    { id: 3, nom: 'Petit',   prenom: 'Emma',   notes: [12, 13, 11, 14], classe: '4ème' },
    { id: 4, nom: 'Durand',  prenom: 'Noah',   notes: [5, 7, 4, 6],    classe: '3ème' },
    { id: 5, nom: 'Lambert', prenom: 'Chloé',  notes: [16, 14, 18, 15], classe: '6ème' },
    { id: 6, nom: 'Leroy',   prenom: 'Maxime', notes: [10, 12, 9, 11],  classe: '5ème' },
  ]);

  calculerMoyenne(notes: number[]): number {
    if (!notes.length) return 0;
    return notes.reduce((a, b) => a + b, 0) / notes.length;
  }

  supprimerEtudiant(id: number): void {
    this.etudiantsSignal.update(liste => liste.filter(e => e.id !== id));
  }

  getEtudiantsFiltres(): Etudiant[] {
    if (this.filtreClasse === 'tous') return this.etudiantsSignal();
    return this.etudiantsSignal().filter(e => e.classe === this.filtreClasse);
  }
}
