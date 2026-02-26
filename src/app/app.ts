import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header';
import { StatistiquesComponent } from './pages/statistiques/statistiques';
import { CarteEtudiantComponent } from './components/carte-etudiant/carte-etudiant';
import { ListeNotesComponent } from './pages/listes-notes/listes-notes';
import { AccueilComponent } from './pages/accueil/accueil';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, StatistiquesComponent, CarteEtudiantComponent, ListeNotesComponent, AccueilComponent],
  templateUrl: './app.html',
})
export class App {}
