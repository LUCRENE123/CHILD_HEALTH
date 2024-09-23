import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPage } from './login.page'; // Import du composant de connexion des patients

const routes: Routes = [
  {
    path: '', // Chemin racine pour la page de connexion
    component: LoginPage
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginPageRoutingModule {}
