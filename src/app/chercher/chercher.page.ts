import { Component, OnInit } from '@angular/core';
import { EvenementService, Evenement } from '../services/evenement.service';
import { AlertController, ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-chercher',
  templateUrl: './chercher.page.html',
  styleUrls: ['./chercher.page.scss'],
})
export class ChercherPage implements OnInit {
  private evenement: Observable<Evenement[]>;
  listUsers;
  evenementService: any;

  constructor(public alertCtrl: AlertController,
    public toastCtrl: ToastController) { }

  ngOnInit() {
    this.evenement = this.evenementService.getEvenement();
  }
  filterItems(ev: any) {
    //debugger;
    let val = ev.target.value;

    if (val && val.trim() !=='') {
      console.log("Vallll", val);
      this.evenement = this.evenementService.getFilteredEvenement(Number(val));
    } else {
      this.evenement = this.evenementService.getEvenement();
      console.log(" no Val");
    }
  }
}
