import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AjouterEvenementPage } from './ajouter-evenement.page';

const routes: Routes = [
  {
    path: '',
    component: AjouterEvenementPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AjouterEvenementPage]
})
export class AjouterEvenementPageModule {}
