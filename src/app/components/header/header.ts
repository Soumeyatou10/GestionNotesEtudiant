import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive,NgIf, NgClass],
  templateUrl: './header.html',
})
export class HeaderComponent {
   isMenuOpen = true;
}
