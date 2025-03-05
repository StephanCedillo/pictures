import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  imports: [],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  menuActive: boolean = false;

  toggleMenu(): void {
    this.menuActive = !this.menuActive;
  }

  scrollTo(section: string): void {
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
    if (window.innerWidth <= 768) {
      this.menuActive = false; // Cierra el menú después de hacer clic en un enlace en móviles
    }
  }

}
