import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthService } from './auth.service'

const routes: Routes = [
  { path: '', redirectTo: 'tabs', pathMatch: 'full' },
  { path: 'liste-evenement', loadChildren: './pages/liste-evenement/liste-evenement.module#ListeEvenementPageModule' },
  { path: 'ajouter-evenement', loadChildren: './pages/ajouter-evenement/ajouter-evenement.module#AjouterEvenementPageModule' },
  { path: 'ajouter-evenement/:id', loadChildren: './pages/ajouter-evenement/ajouter-evenement.module#AjouterEvenementPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'forget-password', loadChildren: './forget-password/forget-password.module#ForgetPasswordPageModule' },
  { path: 'chercher', loadChildren: './chercher/chercher.module#ChercherPageModule' }



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
