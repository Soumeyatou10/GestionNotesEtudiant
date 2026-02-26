import { Component, signal, computed } from '@angular/core';
import { NgClass, DecimalPipe } from '@angular/common';
import { Etudiant } from '../../models/etudiant.model';

@Component({
  selector: 'app-statistiques',
  standalone: true,
  imports: [NgClass, DecimalPipe],
  templateUrl: './statistiques.html',
})
export class StatistiquesComponent {
  etudiantsSignal = signal<Etudiant[]>([
    { id: 1, nom: 'Martin',  prenom: 'Alice',  notes: [18, 15, 17, 14], classe: '6ème' },
    { id: 2, nom: 'Bernard', prenom: 'Lucas',  notes: [8, 9, 6, 11],   classe: '5ème' },
    { id: 3, nom: 'Petit',   prenom: 'Emma',   notes: [12, 13, 11, 14], classe: '4ème' },
    { id: 4, nom: 'Durand',  prenom: 'Noah',   notes: [5, 7, 4, 6],    classe: '3ème' },
    { id: 5, nom: 'Lambert', prenom: 'Chloé',  notes: [16, 14, 18, 15], classe: '6ème' },
    { id: 6, nom: 'Leroy',   prenom: 'Maxime', notes: [10, 12, 9, 11],  classe: '5ème' },
  ]);

  private calculerMoyenne(notes: number[]): number {
    if (!notes.length) return 0;
    return notes.reduce((a, b) => a + b, 0) / notes.length;
  }

  moyenneGenerale = computed(() => {
    const list = this.etudiantsSignal();
    if (!list.length) return 0;
    const total = list.reduce((sum, e) => sum + this.calculerMoyenne(e.notes), 0);
    return total / list.length;
  });

  nombreReussites = computed(() =>
    this.etudiantsSignal().filter(e => this.calculerMoyenne(e.notes) >= 10).length
  );

  nombreEchecs = computed(() =>
    this.etudiantsSignal().filter(e => this.calculerMoyenne(e.notes) < 10).length
  );
}
