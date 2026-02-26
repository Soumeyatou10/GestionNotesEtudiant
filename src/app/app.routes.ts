import { Routes } from '@angular/router';
import { AccueilComponent } from './pages/accueil/accueil';
import { ListeNotesComponent } from './pages/listes-notes/listes-notes';
import { StatistiquesComponent } from './pages/statistiques/statistiques';


export const routes: Routes = [
  { path: '', redirectTo: '/accueil', pathMatch: 'full' },
  { path: 'accueil', component: AccueilComponent },
  { path: 'liste-notes', component: ListeNotesComponent },
  { path: 'statistiques', component: StatistiquesComponent },
  { path: '**', redirectTo: '/accueil' },
];
