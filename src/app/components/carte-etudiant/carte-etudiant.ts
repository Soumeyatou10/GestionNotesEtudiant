import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgClass, NgFor, NgIf, DecimalPipe } from '@angular/common';
import { Etudiant } from '../../models/etudiant.model';

@Component({
  selector: 'app-carte-etudiant',
  standalone: true,
  imports: [NgClass, NgFor, NgIf, DecimalPipe],
  templateUrl: './carte-etudiant.html',
  styleUrls: ['./carte-etudiant.css'],
})
export class CarteEtudiantComponent {
  @Input() etudiant!: Etudiant;
  @Input() moyenne: number = 0;
  @Output() suppression = new EventEmitter<number>();

  onSupprimer(): void {
    this.suppression.emit(this.etudiant.id);
  }

  getClassesCarte(): { [key: string]: boolean } {
    return {
      'carte-echec':    this.moyenne < 10,
      'carte-passable': this.moyenne >= 10 && this.moyenne < 14,
      'carte-reussite': this.moyenne >= 14,
    };
  }
}
