
  import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core'
import { TabsPage } from './tabs.page';

const routes: Routes = [
	{
		path: '',
		component: TabsPage,
		children: [
               { path: 'clubs', loadChildren: '../clubs/clubs.module#ClubsPageModule' },
               { path: 'evenements', loadChildren: '../evenements/evenements.module#EvenementsPageModule' },
               { path: 'reservation', loadChildren: '../reservation/reservation.module#ReservationPageModule' },
               { path: 'amis', loadChildren: '../amis/amis.module#AmisPageModule' },
			   { path: 'parametres', loadChildren: '../parametres/parametres.module#ParametresPageModule' },
		]
	}	
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class TabsRoutingModule { }
  