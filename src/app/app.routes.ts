// Suggested code may be subject to a license. Learn more: ~LicenseLog:1319871930.
import { Routes } from '@angular/router';
import { LoginComponent } from './Components/Auth/login/login.component';
import { PanelUsuarioComponent } from './Components/Usuario/panel-usuario/panel-usuario.component';
import { RegisterComponent} from './Components/Auth/register/register.component';

import { FotoDetalladaComponent } from './Components/Usuario/foto-detallada/foto-detallada.component';


export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'user', component: PanelUsuarioComponent,
    children: [
      { path: 'photo/:id', component: FotoDetalladaComponent },
    ] },
  { path: '**', redirectTo: 'login' } 
];

