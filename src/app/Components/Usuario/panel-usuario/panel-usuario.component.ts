import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { GaleriaComponent } from '../galeria/galeria.component';
import { CameraComponent } from '../camara/camara.component';


@Component({
  selector: 'app-panel-usuario',
  imports: [NavBarComponent,
    GaleriaComponent,
    CameraComponent],
  templateUrl: './panel-usuario.component.html',
  styleUrl: './panel-usuario.component.css'
})
export class PanelUsuarioComponent {

}
